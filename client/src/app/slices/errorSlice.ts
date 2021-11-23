import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from 'types/types';

interface IErrorState {
  isErrorProducts: IError | null;
}

const initialState: IErrorState = {
  isErrorProducts: null,
};

const errorSlice = createSlice({
  name: 'errorState',
  initialState,
  reducers: {
    productsError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorProducts: action.payload };
    },
    clearErrors: () => {
      return initialState;
    },
  },
});

export const { productsError, clearErrors } = errorSlice.actions;

export default errorSlice.reducer;
