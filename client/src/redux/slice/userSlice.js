import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "white",
  isLogin: false,
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
    setLogggedIn: (state) => {
      if (state.isLogin) {
        state.isLogin = false;
      } else {
        state.isLogin = true;
      }
    },
  },
});

export const { changeMode, setLogggedIn } = userSlice.actions;

export default userSlice.reducer;
