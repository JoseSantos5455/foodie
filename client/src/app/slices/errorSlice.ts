import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IErrorState {
  isErrorProducts: string | null;
}

const initialState: IErrorState = {
  isErrorProducts: null,
};

const errorSlice = createSlice({
  name: 'errorState',
  initialState,
  reducers: {
    productsError: (state, action: PayloadAction<string | null>) => {
      return { ...state, isErrorProducts: action.payload };
    },
  },
});

export const { productsError } = errorSlice.actions;

export default errorSlice.reducer;
