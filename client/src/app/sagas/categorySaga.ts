import { put, call } from '@redux-saga/core/effects';
import { addCategory, getCategories } from 'api/services/categoryApi';
import {
  addCategoryStart,
  addCategorySuccess,
  getCategoriesStart,
  getCategoriesSuccess,
} from 'app/slices/categorySlice';
import { categoryError } from 'app/slices/errorSlice';
import { loadingCategory } from 'app/slices/loadingSlice';
import { ICategory } from 'types/types';
import { ISaga } from 'types/types';
import { uploadImage } from 'api/firebase';

function* handleError(err: any) {
  yield put(loadingCategory(false));
  yield put(categoryError({ message: err.message || 'Sorry, a server error accured please try again later' }));
}

function* categorySaga({ type, payload }: ISaga) {
  switch (type) {
    case addCategoryStart.type:
      try {
        yield put(loadingCategory(true));
        if (payload.image) {
          const imageUrl: string = yield call(uploadImage, payload.image);
          const category: ICategory = yield call(addCategory, { name: payload.name, image: imageUrl });
          yield put(addCategorySuccess(category));
          yield put(loadingCategory(false));
        } else {
          const category: ICategory = yield call(addCategory, payload);
          yield put(addCategorySuccess(category));
          yield put(loadingCategory(false));
        }
      } catch (err) {
        yield handleError(err);
      }
      break;
    case getCategoriesStart.type:
      try {
        yield put(loadingCategory(true));
        const categories: ICategory[] = yield call(getCategories);
        yield put(getCategoriesSuccess(categories));
        yield put(loadingCategory(false));
      } catch (err) {
        yield handleError(err);
      }
      break;
    default:
      return;
  }
}

export default categorySaga;
