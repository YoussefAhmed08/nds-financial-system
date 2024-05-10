import { configureStore } from "@reduxjs/toolkit";
import corporatesSlice from "./corporatesSlice";

export const store = configureStore({
  reducer: {
    corporates: corporatesSlice,
  },
});
