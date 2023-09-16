import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "./store.ts";

export type Notification = {
  id: number;
  type: "info" | "warning" | "success" | "error";
  title: string;
  message?: string;
};

interface notificationState {
  notifications: Notification[];
}

const initialState: notificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    dismissNotification: (state, action: PayloadAction<number>) => {
      state.notifications.filter((notification) => notification.id !== action.payload);
    },
  }
});

export const {
  addNotification,
  dismissNotification
} = notificationSlice.actions;
export const selectNotifications = (state: RootState) => state.notificationSlice.notifications;

export default notificationSlice.reducer;
