import { call, put } from '@redux-saga/core/effects';
import { uploadImage } from 'api/firebase';
import { addProduct, getProducts } from 'api/services/productApi';
import { productsError } from 'app/slices/errorSlice';
import { loadingProducts } from 'app/slices/loadingSlice';
import { getProductsStart, getProductsSuccess, addProductStart, addProductSuccess } from 'app/slices/productSlice';
import { IProductRes } from 'types/types';
import { productData } from 'utils/helpers';

export interface ISaga {
  type: string;
  payload: any;
}

function* handleError(err: any) {
  yield put(loadingProducts(false));
  yield put(productsError({ message: err.message || 'Sorry, a server error accured please try again later' }));
}

function* productsSaga({ type, payload }: ISaga) {
  switch (type) {
    case getProductsStart.type:
      try {
        yield put(loadingProducts(true));
        const products: IProductRes[] = yield call(getProducts);
        yield put(getProductsSuccess(products));
        yield put(loadingProducts(false));
      } catch (err) {
        yield handleError(err);
      }
      break;
    case addProductStart.type:
      try {
        yield put(loadingProducts(true));
        console.log(payload);
        const productImageUrl: string = yield call(uploadImage, payload.image[0]);
        payload.image = productImageUrl;
        if (payload.subImages.length > 0) {
          let productSubImagesUrl: string[] = [];
          for (let i = 0; i < payload.subImages.length; i++) {
            const uplaodedImageUrl: string = yield call(uploadImage, payload.subImages[i]);
            productSubImagesUrl.push(uplaodedImageUrl);
          }

          payload.subImages = productSubImagesUrl;
        }

        const product: IProductRes = yield call(addProduct, productData(payload), payload.token);
        yield put(addProductSuccess(product));
        yield put(loadingProducts(false));
      } catch (err) {
        yield handleError(err);
      }
      break;

    default:
      return;
  }
}

export default productsSaga;
