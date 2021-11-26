import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICart {
  title: string;
  _id: string;
  image: string;
  price: number;
  qty: number;
}

const initialState: ICart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      return state.some((product) => product._id === action.payload._id) ? state : [...state, { ...action.payload }];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product._id !== action.payload);
    },
    addQtyItem: (state, action: PayloadAction<string>) => {
      return state.map((product) => {
        if (product._id === action.payload) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product;
      });
    },
    minusQtyItem: (state, action: PayloadAction<string>) => {
      return state.map((product) => {
        if (product._id === action.payload) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }
        return product;
      });
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, addQtyItem, minusQtyItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
