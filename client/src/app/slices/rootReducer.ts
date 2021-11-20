import { combineReducers } from '@reduxjs/toolkit';
import errorReducer from './errorSlice';
import loadingReducer from './loadingSlice';
import productReducer from './productSlice';

export const rootReducer = combineReducers({
  products: productReducer,
  loadingState: loadingReducer,
  errorState: errorReducer,
});
