import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountCredentiels, ILoginCredentiels, IUser } from 'types/types';

const initialState = {} as IUser;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpStart: (state, action: PayloadAction<IAccountCredentiels>) => {},
    signUpSuccess: (state, action) => {
      return action.payload;
    },
    loginStart: (state, action: PayloadAction<ILoginCredentiels>) => {},
    loginSuccess: (state, action) => {
      return action.payload;
    },
  },
});

export const { signUpStart, signUpSuccess, loginStart, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
