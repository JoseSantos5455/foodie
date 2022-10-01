import { getProfile, updateProfile, uploadAvatar } from '@/api/services/profileApi';
import { loadingProfile } from '@/app/slices/loadingSlice';
import {
  getProfileStart,
  getProfileSuccess,
  updateProfileStart,
  updateProfileSuccess,
  uploadAvatarStart,
  uploadAvatarSuccess,
} from '@/app/slices/profileSlice';
import { put, call } from 'redux-saga/effects';
import { profileError } from '@/app/slices/errorSlice';
import { ISaga, IUser } from '@/types/types';
import toast from 'react-hot-toast';

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
    case updateProfileStart.type:
      try {
        yield put(loadingProfile(true));
        const profile: IUser = yield call(updateProfile, payload.token, payload);
        yield put(updateProfileSuccess(profile));
        yield put(loadingProfile(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case uploadAvatarStart.type:
      try {
        yield put(loadingProfile(true));
        const profile: IUser = yield call(uploadAvatar, payload.token, payload.avatar);
        yield put(uploadAvatarSuccess(profile));
        yield put(loadingProfile(false));
        yield toast.success('avatar uploaded');
      } catch (err) {
        handleError(err);
      }
    default:
      return;
  }
}

export default profileSaga;
