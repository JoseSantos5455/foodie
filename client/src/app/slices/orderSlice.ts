import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from 'types/types';

const initialState: IOrder[] = [];

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrderStart: (state, action: PayloadAction<IOrder>) => {},
    addOrderSuccess: (state, action: PayloadAction<IOrder>) => {
      return [...state, action.payload];
    },
    getOrderStart: (state, action: PayloadAction<string>) => {},
    getOrderSuccess: (state, action: PayloadAction<IOrder>) => {
      return [...state, action.payload];
    },
  },
});

export const { addOrderStart, addOrderSuccess, getOrderStart, getOrderSuccess } = orderSlice.actions;
export default orderSlice.reducer;
