import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice/productSlice";
import cartReducers from "../features/cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducers,
  },
});
