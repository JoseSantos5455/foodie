import { addCategoryStart } from 'app/slices/categorySlice';
import { getProductsStart } from 'app/slices/productSlice';
import { takeLatest } from 'redux-saga/effects';
import productsSaga from './productsSaga';
import categorySaga from './categorySaga';

function* rootSaga() {
  yield takeLatest(getProductsStart.type, productsSaga);
  yield takeLatest(addCategoryStart.type, categorySaga);
}

export default rootSaga;
