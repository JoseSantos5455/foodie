import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrder, IOrderRes } from 'types/types';

const initialState: IOrderRes[] = [];

type AddOrderPayload = {
  newOrder: IOrder;
  token: string;
};

type OrderStatusPayload = {
  id: string;
  orderStatus: string;
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
    updateOrderStatusStart: (state, action: PayloadAction<OrderStatusPayload>) => {},
    updateOrderStatusSuccess: (state, action: PayloadAction<IOrderRes>) => {
      return state.map((order) => (order._id === action.payload._id ? { ...action.payload } : order));
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
  updateOrderStatusStart,
  updateOrderStatusSuccess,
  clearOrders,
} = orderSlice.actions;
export default orderSlice.reducer;
