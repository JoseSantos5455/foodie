import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  orderSuccess: boolean;
}

const initialState: GlobalState = {
  orderSuccess: false,
};

const globalStateSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setOrderStatus: (state, action: PayloadAction<boolean>) => {
      return { ...state, orderSuccess: action.payload };
    },
    clearGlobalState: () => {
      return initialState;
    },
  },
});

export const { setOrderStatus } = globalStateSlice.actions;

export default globalStateSlice.reducer;
