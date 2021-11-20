import { call, put } from '@redux-saga/core/effects';
import { getProducts } from 'api/services/productApi';
import { productsError } from 'app/slices/errorSlice';
import { loadingProducts } from 'app/slices/loadingSlice';
import { getProductsStart, getProductsSuccess } from 'app/slices/productSlice';
import { IProduct } from 'types/types';
import toast from 'react-hot-toast';

function* handleError(err: any) {
  yield put(loadingProducts(false));
  if (err.message) {
    yield put(productsError(err.message));
    toast(err.message);
  } else {
    toast.error('server error');
    yield put(productsError('server error'));
  }
}

function* productsSaga(action: any) {
  switch (action.type) {
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
