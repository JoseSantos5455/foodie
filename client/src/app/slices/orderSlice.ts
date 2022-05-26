import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder, IOrderRes } from 'types/types';

const initialState: IOrderRes[] = [];

type AddOrderPayload = {
  newOrder: IOrder;
  token: string;
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrderStart: (state, action: PayloadAction<AddOrderPayload>) => {},
    addOrderSuccess: (state, action: PayloadAction<IOrderRes>) => {
      return [...state, action.payload];
    },
    getOrderStart: (state, action: PayloadAction<string>) => {},
    getOrderSuccess: (state, action: PayloadAction<IOrderRes[]>) => {
      return [...state, ...action.payload];
    },
    adminGetOrderStart: (state, action: PayloadAction<string>) => {},
    adminGetOrderSuccess: (state, action: PayloadAction<IOrderRes[]>) => {
      return [...state, ...action.payload];
    },
    clearOrders: () => {
      return [];
    },
  },
});

export const {
  addOrderStart,
  addOrderSuccess,
  getOrderStart,
  getOrderSuccess,
  adminGetOrderStart,
  adminGetOrderSuccess,
  clearOrders,
} = orderSlice.actions;
export default orderSlice.reducer;
