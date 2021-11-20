import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'types/types';

const initialState: IProduct[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart: (state, action: PayloadAction<void>) => {},
    getProductsSuccess: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { getProductsStart, getProductsSuccess } = productSlice.actions;

export default productSlice.reducer;
