import { getProductsStart } from 'app/slices/productSlice';
import { takeLatest } from 'redux-saga/effects';
import productsSaga from './productsSaga';

function* rootSaga() {
  yield takeLatest(getProductsStart.type, productsSaga);
}

export default rootSaga;
