import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart } from './cartSlice'; 

const initialState: ICart[] = [];

export const wishlistSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ICart>) => {
      return state.some((product) => product.productId === action.payload.productId)
        ? state
        : [...state, { ...action.payload }];
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.productId !== action.payload);
    },
    clearWishlist: () => {
      return [];
    },
  },
});

export const { addToWishlist, removeFromWishlist,clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;