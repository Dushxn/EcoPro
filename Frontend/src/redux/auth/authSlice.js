import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Will hold the user data after login
  isAuthenticated: false, // Tracks whether user is authenticated
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login action to store user data
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Logout action to remove user data
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { loginSuccess, logoutSuccess } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
