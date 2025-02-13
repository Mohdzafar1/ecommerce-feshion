import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../store/allSlice/productSlice"
import cartSlice from "../store//allSlice/cartSlice"


export const store = configureStore({
    reducer: {
        product:productSlice,
        cart:cartSlice
    },
  })