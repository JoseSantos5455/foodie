import { ISaga } from './productsSaga';
import { put, call } from 'redux-saga/effects';
import { loadingOrder } from 'app/slices/loadingSlice';
import { orderError } from 'app/slices/errorSlice';
import { addOrderStart, addOrderSuccess, getOrderStart, getOrderSuccess } from 'app/slices/orderSlice';
import { IOrder } from 'types/types';
import { addOrder, getOrders } from 'api/services/orderApi';

function* handleError(err: any) {
  yield put(loadingOrder(false));
  yield put(orderError({ message: err.message || 'Sorry, a server error accured please try again later' }));
}

function* orderSaga({ type, payload }: ISaga) {
  switch (type) {
    case addOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const order: IOrder = yield call(addOrder, payload.newOrder, payload.token);
        yield put(addOrderSuccess(order));
        yield put(loadingOrder(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case getOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const order: IOrder[] = yield call(getOrders, payload);
        yield put(getOrderSuccess(order));
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
