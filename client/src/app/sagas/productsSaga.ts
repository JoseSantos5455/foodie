import { call, put } from '@redux-saga/core/effects';
import { addProduct, getProducts, deleteProduct, uploadProductImage } from 'api/services/productApi';
import { productsError } from 'app/slices/errorSlice';
import { loadingProducts } from 'app/slices/loadingSlice';
import {
  getProductsStart,
  getProductsSuccess,
  addProductStart,
  addProductSuccess,
  delProductStart,
  delProductSuccess,
} from 'app/slices/productSlice';
import { IProductRes } from 'types/types';
import { productData } from 'utils/helpers';
import { ISaga } from 'types/types';

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
        const productImageUrl: string = yield call(uploadProductImage, payload.image, payload.token);
        payload.image = productImageUrl;
        if (payload.subImages.length > 0) {
          let productSubImagesUrl: string[] = [];
          for (let img of payload.subImages) {
            const uplaodedImageUrl: string = yield call(uploadProductImage, img, payload.token);
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
    case delProductStart.type:
      try {
        yield put(loadingProducts(true));
        const id: string = yield call(deleteProduct, payload.id, payload.token);
        yield put(delProductSuccess(id));
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
