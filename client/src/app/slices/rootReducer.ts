import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import errorReducer from './errorSlice';
import loadingReducer from './loadingSlice';
import productReducer from './productSlice';
import authReducer from './authSlice';
import profileReducer from './profileSlice';
import orderReducer from './orderSlice';
import usersReducer from './usersSlice';
import wishlistReducer from './wishlistSlice';
import reviewSlice from './reviewsSlice';

export const rootReducer = combineReducers({
  products: productReducer,
  loadingState: loadingReducer,
  errorState: errorReducer,
  cart: cartReducer,
  categories: categoryReducer,
  auth: authReducer,
  profile: profileReducer,
  orders: orderReducer,
  users: usersReducer,
  wishlist: wishlistReducer,
  reviews: reviewSlice,
});
