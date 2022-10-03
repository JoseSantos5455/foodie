import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '@/types/types';

interface IErrorState {
  isErrorProducts: IError | null;
  isErrorCategory: IError | null;
  isErrorAuth: IError | null;
  isErrorProfile: IError | null;
  isErrorOrder: IError | null;
  isErrorUsers: IError | null;
  isErrorGlobal: IError | null;
}

const initialState: IErrorState = {
  isErrorProducts: null,
  isErrorCategory: null,
  isErrorAuth: null,
  isErrorProfile: null,
  isErrorOrder: null,
  isErrorUsers: null,
  isErrorGlobal: null,
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
    authError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorAuth: action.payload };
    },
    profileError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorProfile: action.payload };
    },
    orderError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorOrder: action.payload };
    },
    usersError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorUsers: action.payload };
    },
    globalError: (state, action: PayloadAction<IError | null>) => {
      return { ...state, isErrorGlobal: action.payload };
    },
    clearErrors: () => {
      return initialState;
    },
  },
});

export const {
  productsError,
  categoryError,
  authError,
  clearErrors,
  profileError,
  orderError,
  usersError,
  globalError,
} = errorSlice.actions;

export default errorSlice.reducer;
