import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoadingState {
  isLoadingProducts: boolean;
  isLoadingCategory: boolean;
  isLoadingAuth: boolean;
  isLoadingProfile: boolean;
}

const initialState: ILoadingState = {
  isLoadingProducts: false,
  isLoadingCategory: false,
  isLoadingAuth: false,
  isLoadingProfile: false,
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
    loadingAuth: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingAuth: action.payload };
    },
    loadingProfile: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingAuth: action.payload };
    },
  },
});

export const { loadingProducts, loadingCategory, loadingAuth, loadingProfile } = loadingSlice.actions;

export default loadingSlice.reducer;
