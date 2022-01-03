import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductRes, IProduct } from 'types/types';

const initialState: IProductRes[] = [];
interface IAdminProduct extends IProduct {
  token: string
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart: (state, action: PayloadAction<void>) => {},
    getProductsSuccess: (state, action: PayloadAction<IProductRes[]>) => {
      return [...action.payload];
    },
    addProductStart: (state, action: PayloadAction<IAdminProduct>) => {},
    addProductSuccess: (state, action: PayloadAction<IProductRes>) => {
      return [...state, action.payload];
    },
  },
});

export const { getProductsStart, getProductsSuccess, addProductStart, addProductSuccess } = productSlice.actions;

export default productSlice.reducer;
