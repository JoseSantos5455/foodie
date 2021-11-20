import { call } from '@redux-saga/core/effects';
import { getProducts } from 'api/services/productApi';
import { getProductsStart } from 'app/slices/productSlice';
import { IProduct } from 'types/types';

function* productsSaga(action: any) {
  switch (action.type) {
    case getProductsStart.type:
      try {
        const products: IProduct = yield call(getProducts);
        console.log(products);
      } catch (err) {
        console.log(err);
      }
      break;
    default:
      return;
  }
}

export default productsSaga;
