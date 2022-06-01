import { addCategoryStart, getCategoriesStart } from 'app/slices/categorySlice';
import { addProductStart, getProductsStart } from 'app/slices/productSlice';
import { takeLatest } from 'redux-saga/effects';
import productsSaga from './productsSaga';
import categorySaga from './categorySaga';
import { loginStart, logOut, signUpStart } from 'app/slices/authSlice';
import authSaga from './authSaga';
import { getProfileStart, updateProfileStart } from 'app/slices/profileSlice';
import profileSaga from './profileSaga';
import {
  addOrderStart,
  adminGetOrderStart,
  deleteOrderStart,
  getOrderStart,
  updateOrderStatusStart,
} from 'app/slices/orderSlice';
import orderSaga from './orderSaga';

function* rootSaga() {
  yield takeLatest([getProductsStart.type, addProductStart.type], productsSaga);
  yield takeLatest([addCategoryStart.type, getCategoriesStart.type], categorySaga);
  yield takeLatest([signUpStart.type, loginStart.type, logOut.type], authSaga);
  yield takeLatest([getProfileStart.type, updateProfileStart.type], profileSaga);
  yield takeLatest(
    [addOrderStart.type, getOrderStart.type, adminGetOrderStart, updateOrderStatusStart, deleteOrderStart],
    orderSaga,
  );
}

export default rootSaga;
