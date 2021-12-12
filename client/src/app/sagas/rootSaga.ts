import { addCategoryStart, getCategoriesStart } from 'app/slices/categorySlice';
import { getProductsStart } from 'app/slices/productSlice';
import { takeLatest } from 'redux-saga/effects';
import productsSaga from './productsSaga';
import categorySaga from './categorySaga';
import { loginStart, signUpStart } from 'app/slices/authSlice';
import authSaga from './authSaga';

function* rootSaga() {
  yield takeLatest(getProductsStart.type, productsSaga);
  yield takeLatest([addCategoryStart.type, getCategoriesStart.type], categorySaga);
  yield takeLatest([signUpStart.type, loginStart.type], authSaga);
}

export default rootSaga;
