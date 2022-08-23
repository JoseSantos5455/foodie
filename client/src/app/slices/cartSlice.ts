import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICartItem, IVariant} from '@/types/types'
export interface ICart {
  title: string;
  slug: string;
  productId: string;
  image: string;
  price: number;
  qty: number;
  variants?: {
      [key: string]: IVariant
    }
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
          return [...state, { ...rest, variants: {[action.payload.variant.key]: action.payload.variant} }]
      }else{
        return [...state, { ...action.payload }]
      }
    },
    addNewVariant: (state, action: PayloadAction<ICartItem>) => {
      const {variant, ...rest} = action.payload;
      if(variant){
        if(state.some((product) => product.variants && product.variants[variant.key])){
          return state
        }else {state.map((product) => {
            return {
              ...product,
              variants: {...product.variants, [variant.key]: variant},
              qty: product.qty + 1
            }
          })}
      }else{
        return state
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
             let existingVariant = product.variants ? product.variants[action.payload.variantKey] : null
            if(existingVariant){
              let newVariant = {...existingVariant, qty: existingVariant.qty + 1}
              
            return {
              ...product,
              variants: {...product.variants, [action.payload.variantKey]: newVariant},
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
    decrementVariant: (state, action: PayloadAction<ItemWithVariant>) => {
      return state.map((product) => {
        if(product.productId === action.payload.id && action.payload.variantKey){
           let existingVariant = product.variants ? product.variants[action.payload.variantKey] : null
          if(existingVariant){
            let newVariant = {...existingVariant, qty: existingVariant.qty - 1}
          return {
            ...product,
            variants: {...product.variants, [action.payload.variantKey]: newVariant},
            qty: product.qty - 1
          }
        }else{
          return {
            ...product,
            qty: product.qty - 1 
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

export const { addToCart, removeFromCart, addQtyItem, minusQtyItem, incrementVariant, clearCart, decrementVariant } = cartSlice.actions;

export default cartSlice.reducer;
