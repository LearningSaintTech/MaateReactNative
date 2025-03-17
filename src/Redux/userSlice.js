import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Guest",
  email: "",
  remainingAmount: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.remainingAmount = action.payload.remainingAmount;
    },
    updateRemainingAmount: (state, action) => {
      state.remainingAmount = action.payload;
    },
  },
});

export const { setUser, updateRemainingAmount } = userSlice.actions;
export default userSlice.reducer;
