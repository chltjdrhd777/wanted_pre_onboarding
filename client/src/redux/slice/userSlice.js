import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "white",
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
  },
});

export const { changeMode } = userSlice.actions;

export default userSlice.reducer;
