import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder } from 'types/types';

const initialState: IOrder[] = [];

type AddOrderPayload = {
  newOrder: IOrder;
  token: string;
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrderStart: (state, action: PayloadAction<AddOrderPayload>) => {},
    addOrderSuccess: (state, action: PayloadAction<IOrder>) => {
      return [...state, action.payload];
    },
    getOrderStart: (state, action: PayloadAction<string>) => {},
    getOrderSuccess: (state, action: PayloadAction<IOrder[]>) => {
      return [...state, ...action.payload];
    },
    clearOrders: () => {
      return [];
    },
  },
});

export const { addOrderStart, addOrderSuccess, getOrderStart, getOrderSuccess, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
