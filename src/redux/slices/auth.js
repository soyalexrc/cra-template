import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  currentUser: localStorage.getItem('vi-currentUser') ? JSON.parse(localStorage.getItem('vi-currentUser')) : {},
  token:  localStorage.getItem('vi-token') ? localStorage.getItem('vi-token') : null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setCurrentUser(state, {payload}) {
      state.currentUser= payload;
      localStorage.setItem('vi-currentUser', JSON.stringify(payload))
    },

    setToken(state, {payload}) {
      state.token = payload;
      localStorage.setItem('vi-token', JSON.stringify(payload))
    },

    removeToken(state, {payload}) {
      state.token = null;
      state.currentUser = {};
      localStorage.removeItem('vi-token');
    }
  },
});

export const { setToken, setCurrentUser, removeToken } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


