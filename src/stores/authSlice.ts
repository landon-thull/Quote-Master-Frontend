import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "./store.ts";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    }
  }
});

export const {setToken, clearToken} = authSlice.actions;
export const selectToken = (state: RootState) => state.authSlice.token;

export default authSlice.reducer;