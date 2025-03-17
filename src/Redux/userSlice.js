import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  profilePicture: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.profilePicture = action.payload.profilePicture;
    },
    updateProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
    updatePhoneNumber: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { setUser, updateProfilePicture, updatePhoneNumber } = userSlice.actions;
export default userSlice.reducer;
