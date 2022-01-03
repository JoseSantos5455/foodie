import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductRes, IProduct } from 'types/types';

const initialState: IProductRes[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart: (state, action: PayloadAction<void>) => {},
    getProductsSuccess: (state, action: PayloadAction<IProductRes[]>) => {
      return [...action.payload];
    },
    addProductStart: (state, action: PayloadAction<IProduct>) => {},
    addProductSuccess: (state, action: PayloadAction<IProductRes>) => {
      return [...state, action.payload];
    },
  },
});

export const { getProductsStart, getProductsSuccess } = productSlice.actions;

export default productSlice.reducer;
