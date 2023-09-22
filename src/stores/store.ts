import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "@/stores/notificationSlice.ts";
import authSlice from "@/stores/authSlice.ts";
export const store = configureStore({
  reducer: {
    notificationSlice,
    authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;