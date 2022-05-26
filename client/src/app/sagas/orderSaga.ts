import { ISaga } from './productsSaga';
import { put, call } from 'redux-saga/effects';
import { loadingOrder } from 'app/slices/loadingSlice';
import { orderError } from 'app/slices/errorSlice';
import {
  addOrderStart,
  addOrderSuccess,
  getOrderStart,
  getOrderSuccess,
  adminGetOrderStart,
  adminGetOrderSuccess,
} from 'app/slices/orderSlice';
import { IOrderRes } from 'types/types';
import { addOrder, getOrders, adminGetOrders } from 'api/services/orderApi';
import { clearCart } from 'app/slices/cartSlice';

function* handleError(err: any) {
  yield put(loadingOrder(false));
  yield put(orderError({ message: err.message || 'Sorry, a server error accured please try again later' }));
}

function* orderSaga({ type, payload }: ISaga) {
  switch (type) {
    case addOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const order: IOrderRes = yield call(addOrder, payload.newOrder, payload.token);
        yield put(addOrderSuccess(order));
        yield put(clearCart());

        yield put(loadingOrder(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case getOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const order: IOrderRes[] = yield call(getOrders, payload);
        yield put(getOrderSuccess(order));
        yield put(loadingOrder(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case adminGetOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const orders: IOrderRes[] = yield call(adminGetOrders, payload);
        yield put(adminGetOrderSuccess(orders));
        yield put(loadingOrder(false));
      } catch (err) {
        handleError(err);
      }
      break;
    default:
      return;
  }
}

export default orderSaga;
