import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types/types';

const initialState: IUser[] = [];

const usersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUsersStart: (state, action: PayloadAction<string>) => {},
    getUsersSuccess: (state, action) => {
      return action.payload;
    },
    clearUsers: () => [],
  },
});

export const { getUsersStart, getUsersSuccess } = usersSlice.actions;
export default usersSlice.reducer;
