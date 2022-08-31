import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '@/types/types';

const initialState: ICategory[] = [];

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategoryStart: (state, action: PayloadAction<ICategory>) => {},
    addCategorySuccess: (state, action: PayloadAction<ICategory>) => {
      return [...state, action.payload];
    },
    getCategoriesStart() {},
    getCategoriesSuccess: (state, action: PayloadAction<ICategory[]>) => {
      return action.payload;
    },
  },
});

export const { addCategoryStart, addCategorySuccess, getCategoriesStart, getCategoriesSuccess } = categorySlice.actions;

export default categorySlice.reducer;
