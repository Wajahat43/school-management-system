import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = authSlice.actions;
export const getCurrentUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
