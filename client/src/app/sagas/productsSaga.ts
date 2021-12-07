import { call, put } from '@redux-saga/core/effects';
import { getProducts } from 'api/services/productApi';
import { productsError } from 'app/slices/errorSlice';
import { loadingProducts } from 'app/slices/loadingSlice';
import { getProductsStart, getProductsSuccess } from 'app/slices/productSlice';
import { IProduct } from 'types/types';

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
        const products: IProduct[] = yield call(getProducts);
        yield put(getProductsSuccess(products));
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
