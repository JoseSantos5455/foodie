import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from 'types/types';

interface IErrorState {
  isErrorProducts: IError | null;
  isErrorCategory: IError | null;
}

const initialState: IErrorState = {
  isErrorProducts: null,
  isErrorCategory: null,
};

const errorSlice = createSlice({
  name: 'errorState',
  initialState,
  reducers: {
    productsError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorProducts: action.payload };
    },
    categoryError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorCategory: action.payload };
    },
    clearErrors: () => {
      return initialState;
    },
  },
});

export const { productsError, categoryError, clearErrors } = errorSlice.actions;

export default errorSlice.reducer;
