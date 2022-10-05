import { signUp, login } from '@/api/services/authApi';
import { signUpStart, signUpSuccess, loginStart, loginSuccess, logOut, clearAuth } from '@/app/slices/authSlice';
import { clearCart } from '@/app/slices/cartSlice';
import { authError, globalError } from '@/app/slices/errorSlice';
import { loadingAuth } from '@/app/slices/loadingSlice';
import { clearOrders } from '@/app/slices/orderSlice';
import { clearProfile } from '@/app/slices/profileSlice';
import { put, call } from 'redux-saga/effects';
import { IUser, ISaga } from '@/types/types';

function* handleError(err: any) {
  yield put(loadingAuth(false));
  if (err.status >= 500 || !err.status)
    yield put(globalError({ message: err.message || 'Sorry, a server error accured please try again later' }));
  else yield put(authError({ message: err.message }));
}

function* authSaga({ type, payload }: ISaga) {
  switch (type) {
    case signUpStart.type:
      try {
        yield put(loadingAuth(true));
        yield put(authError(null));
        const user: IUser = yield call(signUp, payload);
        yield put(signUpSuccess(user));
        yield put(loadingAuth(false));
      } catch (err) {
        yield handleError(err);
      }
      break;
    case loginStart.type:
      try {
        yield put(loadingAuth(true));
        yield put(authError(null));
        const user: IUser = yield call(login, payload);
        yield put(loginSuccess(user));
        yield put(loadingAuth(false));
      } catch (err) {
        yield handleError(err);
      }
      break;
    case logOut.type:
      try {
        yield put(loadingAuth(true));
        yield put(clearOrders());
        yield put(clearProfile());
        yield put(clearAuth());
        yield put(clearCart());
        yield put(loadingAuth(false));
      } catch (err) {
        yield handleError(err);
      }
      break;
    default:
      return;
  }
}

export default authSaga;
