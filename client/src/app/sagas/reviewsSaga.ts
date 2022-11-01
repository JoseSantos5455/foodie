import { call, put } from 'redux-saga/effects';
import { getReviewsStart, getReviewsSuccess } from '../slices/reviewsSlice';
import { globalError, reviewsError } from '../slices/errorSlice';
import { loadingReviews } from '../slices/loadingSlice';
import { IReviewAdmin, ISaga } from '@/types/types';
import { getReviews } from '@/api/services/reviewsApi';

function* handleError(err: any) {
  yield put(loadingReviews(false));
  if (err.status_code >= 500 || !err.status_code)
    yield put(globalError({ message: err.error.message || 'Sorry, a server error accured please try again later' }));
  else yield put(reviewsError({ message: err.error.message }));
}

function* reviewsSaga({ type, payload }: ISaga) {
  switch (type) {
    case getReviewsStart.type:
      try {
        yield put(loadingReviews(true));
        const reviews: IReviewAdmin[] = yield call(getReviews, payload);
        yield put(getReviewsSuccess(reviews));
        yield put(loadingReviews(false));
      } catch (err) {
        yield handleError(err);
      }
      break;
    default:
      return;
  }
}

export default reviewsSaga;
