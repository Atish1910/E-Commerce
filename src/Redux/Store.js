import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
