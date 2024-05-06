import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
  },
  reducers: {
    setProductData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProductData } = productSlice.actions;

export default productSlice.reducer;
