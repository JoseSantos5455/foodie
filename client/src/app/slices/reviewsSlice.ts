import { IReviewAdmin } from '@/types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

let initialState: IReviewAdmin[] = [] as IReviewAdmin[];

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    getReviewsStart(state, action: PayloadAction<string>) {},
    getReviewsSuccess: (state, action: PayloadAction<IReviewAdmin[]>) => {
      return action.payload;
    },
  },
});

export const { getReviewsStart, getReviewsSuccess } = reviewSlice.actions;
export default reviewSlice.reducer;
