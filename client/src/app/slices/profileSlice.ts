import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/types/types';

const initialState = {} as IUser;

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileStart: (state, action: PayloadAction<string>) => {},
    getProfileSuccess: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
    updateProfileStart: (state, action: PayloadAction<Partial<IUser>>) => {},
    updateProfileSuccess: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },

    clearProfile: () => {
      return {} as IUser;
    },
  },
});

export const { getProfileStart, getProfileSuccess, updateProfileStart, updateProfileSuccess, clearProfile } =
  profileSlice.actions;

export default profileSlice.reducer;
