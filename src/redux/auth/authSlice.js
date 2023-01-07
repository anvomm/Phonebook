import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending](state, action) {},
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [registerUser.rejected](state, action) {
      state.isLoggedIn = false;
    },

    [logInUser.pending](state, action) {},
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.rejected](state, action) {
      state.isLoggedIn = false;
    },

    [logOutUser.pending](state, action) {},
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOutUser.rejected](state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
