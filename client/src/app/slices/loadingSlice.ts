import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoadingState {
  isLoadingProducts: boolean;
}

const initialState: ILoadingState = {
  isLoadingProducts: false,
};

const loadingSlice = createSlice({
  name: 'loadingState',
  initialState,
  reducers: {
    loadingProducts: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingProducts: action.payload };
    },
  },
});

export const { loadingProducts } = loadingSlice.actions;

export default loadingSlice.reducer;
