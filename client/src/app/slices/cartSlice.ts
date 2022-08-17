import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICartItem} from '@/types/types'
export interface ICart {
  title: string;
  slug: string;
  productId: string;
  image: string;
  price: number;
  qty: number;
  variants?: 
      {
        key: string,
        color: string | null,
        size: string | null,
        qty: number
      }[];
}

type ItemWithVariant = {
    id: string;
    variantKey: string;
}

const initialState: ICart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      if(state.some((product) => product.productId === action.payload.productId)){
        return state
      }else if(action.payload.variant){
          const {variant, ...rest} = action.payload;
          return [...state, { ...rest, variants: [action.payload.variant] }]
      }else{
        return [...state, { ...action.payload }]
      }
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
    incrementVariant: (state, action: PayloadAction<ItemWithVariant>) => {
        return state.map((product) => {
          if(product.productId === action.payload.id && action.payload.variantKey){
             let existingVariant = product.variants?.find(v => v.key === action.payload.variantKey)
            if(existingVariant){
            return {
              ...product,
              variants: product.variants?.map(v => v.key === action.payload.variantKey ? {...v, qty: (existingVariant?.qty || 0) + 1} : v ),
              qty: product.qty + 1
            }
          }else{
            return {
              ...product,
              qty: product.qty + 1
            }
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
