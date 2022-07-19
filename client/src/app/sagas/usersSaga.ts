import { deleteUser, getUsers } from '@/api/services/usersApi';
import { usersError } from '@/app/slices/errorSlice';
import { loadingUsers } from '@/app/slices/loadingSlice';
import { delUsersStart, delUsersSuccess, getUsersStart, getUsersSuccess } from '@/app/slices/usersSlice';
import { put, call } from 'redux-saga/effects';
import { ISaga, IUser } from '@/types/types';

function* handleError(err: any) {
  yield put(loadingUsers(false));
  yield put(usersError({ message: err.error.message || 'Sorry, a server error accured please try again later' }));
}

function* usersSaga({ type, payload }: ISaga) {
  switch (type) {
    case getUsersStart.type:
      try {
        yield put(loadingUsers(true));

        const users: IUser[] = yield call(getUsers, payload);
        yield put(getUsersSuccess(users));
        yield put(loadingUsers(false));
      } catch (err) {
        yield handleError(err);
      }
      break;
    case delUsersStart.type:
      try {
        yield put(loadingUsers(true));
        const email: string = yield call(deleteUser, payload.email, payload.token);
        yield put(delUsersSuccess(email));
        yield put(loadingUsers(false));
      } catch (err) {
        yield handleError(err);
      }
      break;

    default:
      return;
  }
}

export default usersSaga;
