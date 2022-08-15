import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICartItem} from '@/types/types'
export interface ICart {
  title: string;
  slug: string;
  productId: string;
  image: string;
  price: number;
  qty: number;
  variants?: {
    [x: string]: number;
}; 
}

const initialState: ICart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      return state.some((product) => product.productId === action.payload.productId)
        ? state
        : [...state, { ...action.payload }];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.productId !== action.payload);
    },
    addQtyItem: (state, action: PayloadAction<string>) => {
      return state.map((product) => {
        if (product.productId === action.payload) {
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
        if (product.productId === action.payload) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }
        return product;
      });
    },
    incrementVariant: (state, action: PayloadAction<ICartItem>) => {
        return state.map((product) => {
          if(product.productId === action.payload.productId && action.payload.variant !== ''){
            let newVariants = product.variants
            if(newVariants){
              if(newVariants[action.payload.variant]){
                newVariants[action.payload.variant] = newVariants[action.payload.variant] + 1;
              }else{
                newVariants[action.payload.variant] = 1;
              }
            }
            return {
              ...product,
              variants: newVariants,
              qty: product.qty + 1
            }
          }
          return product
        })
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, addQtyItem, minusQtyItem, incrementVariant, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
