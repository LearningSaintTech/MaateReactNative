// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  profilePicture: "",
  accessToken: "",
  isProfileCompleted: false,
  latitude: null, // Add latitude
  longitude: null, // Add longitude
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name || "";
      state.email = action.payload.email || "";
      state.phone = action.payload.phone || "";
      state.profilePicture = action.payload.profilePicture || "";
      state.accessToken = action.payload.accessToken || "";
      state.isProfileCompleted = action.payload.isProfileCompleted || false;
      state.latitude = action.payload.latitude || null; // Store latitude
      state.longitude = action.payload.longitude || null; // Store longitude
    },
    updateProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
    updatePhoneNumber: (state, action) => {
      state.phone = action.payload;
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.profilePicture = "";
      state.accessToken = "";
      state.isProfileCompleted = false;
      state.latitude = null; // Reset latitude
      state.longitude = null; // Reset longitude
    },
  },
});

export const { setUser, updateProfilePicture, updatePhoneNumber, clearUser } = userSlice.actions;
export default userSlice.reducer;