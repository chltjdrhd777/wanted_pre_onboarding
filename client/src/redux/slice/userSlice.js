import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "white",
  isLogin: false,
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeMode: (state) => {
      if (state.mode === "white") {
        state.mode = "dark";
      } else {
        state.mode = "white";
      }
    },
    setLogggedIn: (state, { payload }) => {
      state.isLogin = payload;
    },
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export const { changeMode, setLogggedIn, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
