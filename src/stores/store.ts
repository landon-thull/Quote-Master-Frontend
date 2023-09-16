import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "@/stores/notificationSlice.ts";
export const store = configureStore({
  reducer: {
    notificationSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;