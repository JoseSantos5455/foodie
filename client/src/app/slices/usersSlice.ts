import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types/types';

const initialState: IUser[] = [];

type DelProps = {
  token: string;
  email: string;
};

const usersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUsersStart: (state, action: PayloadAction<string>) => {},
    getUsersSuccess: (state, action) => {
      return action.payload;
    },
    delUsersStart: (state, action: PayloadAction<DelProps>) => {},
    delUsersSuccess: (state, action) => state.filter((user) => user.email !== action.payload),
    clearUsers: () => [],
  },
});

export const { getUsersStart, getUsersSuccess, delUsersStart, delUsersSuccess } = usersSlice.actions;
export default usersSlice.reducer;
