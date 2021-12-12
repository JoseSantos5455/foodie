import { signUp, login } from 'api/services/authApi';
import { signUpStart, signUpSuccess, loginStart, loginSuccess } from 'app/slices/authSlice';
import { authError } from 'app/slices/errorSlice';
import { loadingAuth } from 'app/slices/loadingSlice';
import { put, call } from 'redux-saga/effects';
import { IUser } from 'types/types';
import { ISaga } from './productsSaga';

function* handleError(err: any) {
  yield put(loadingAuth(false));
  yield put(authError({ message: err.message || 'Sorry, a server error accured please try again later' }));
}

function* authSaga({ type, payload }: ISaga) {
  switch (type) {
    case signUpStart.type:
      try {
        yield put(loadingAuth(true));
        const user: IUser = yield call(signUp, payload);
        yield put(signUpSuccess(user));
        yield put(loadingAuth(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case loginStart.type:
      try {
        yield put(loadingAuth(true));
        const user: IUser = yield call(login, payload);
        yield put(loginSuccess(user));
        yield put(loadingAuth(false));
      } catch (err) {
        handleError(err);
      }
      break;
    default:
      return;
  }
}

export default authSaga;
