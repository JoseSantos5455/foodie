import { addCategoryStart, getCategoriesStart } from 'app/slices/categorySlice';
import { getProductsStart } from 'app/slices/productSlice';
import { takeLatest } from 'redux-saga/effects';
import productsSaga from './productsSaga';
import categorySaga from './categorySaga';
import { loginStart, signUpStart } from 'app/slices/authSlice';
import authSaga from './authSaga';
import { getProfileStart } from 'app/slices/profileSlice';
import profileSaga from './profileSaga';

function* rootSaga() {
  yield takeLatest(getProductsStart.type, productsSaga);
  yield takeLatest([addCategoryStart.type, getCategoriesStart.type], categorySaga);
  yield takeLatest([signUpStart.type, loginStart.type], authSaga);
  yield takeLatest([getProfileStart.type], profileSaga);
}

export default rootSaga;
