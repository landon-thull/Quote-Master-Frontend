import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.ts"
export const store = configureStore({
  reducer: {
    authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;