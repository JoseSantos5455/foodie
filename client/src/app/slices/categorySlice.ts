import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from 'types/types';

const initialState: ICategory[] = [];

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategoryStart: (state, action: PayloadAction<ICategory>) => {},
    addCategorySuccess: (state, action: PayloadAction<ICategory>) => {
      return [...state, action.payload];
    },
  },
});

export const { addCategoryStart, addCategorySuccess } = categorySlice.actions;

export default categorySlice.reducer;
