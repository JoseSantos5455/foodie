import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoadingState {
  isLoadingProducts: boolean;
  isLoadingCategory: boolean;
}

const initialState: ILoadingState = {
  isLoadingProducts: false,
  isLoadingCategory: false,
};

const loadingSlice = createSlice({
  name: 'loadingState',
  initialState,
  reducers: {
    loadingProducts: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingProducts: action.payload };
    },
    loadingCategory: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingCategory: action.payload };
    },
  },
});

export const { loadingProducts, loadingCategory } = loadingSlice.actions;

export default loadingSlice.reducer;
