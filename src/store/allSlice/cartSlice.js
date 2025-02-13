import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  isLoading: false,
  addCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.addCart.find((val) => val.id === item.id);

      if (existingItem) {
        // If item already exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // Add new item with a quantity property
        state.addCart.push({ ...item, quantity: 1 });
      }
    },
    deleteItemCart: (state, action) => {
        const itemId = action.payload;
        state.addCart = state.addCart.filter((val) => val.id !== itemId);
      },
  },
});

export const { addToCart,deleteItemCart } = cartSlice.actions;
export default cartSlice.reducer;
