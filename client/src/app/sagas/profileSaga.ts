import { getProfile } from 'api/services/profileApi';
import { loadingProfile } from 'app/slices/loadingSlice';
import { getProfileStart, getProfileSuccess } from 'app/slices/profileSlice';
import { put, call } from 'redux-saga/effects';
import { profileError } from '../slices/errorSlice';
import { ISaga } from './productsSaga';
import { IUser } from 'types/types';

function* handleError(err: any) {
  yield put(loadingProfile(false));
  yield put(profileError({ message: err.error.message || 'Sorry, a server error accured please try again later' }));
}

function* profileSaga({ type, payload }: ISaga) {
  switch (type) {
    case getProfileStart.type:
      try {
        yield put(loadingProfile(true));
        const profile: IUser = yield call(getProfile, payload);
        yield put(getProfileSuccess(profile));
        yield put(loadingProfile(false));
      } catch (err) {
        handleError(err);
      }
      break;
    default:
      return;
  }
}

export default profileSaga;
