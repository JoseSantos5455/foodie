import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const rootReducer = combineReducers({
  products: productReducer,
});
