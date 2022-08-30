import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  currentUser: sessionStorage.currentUser ? JSON.parse(sessionStorage.currentUser) : {},
  token: sessionStorage.token ? sessionStorage.token : null
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setCurrentUser(state, {payload}) {
      state.currentUser= payload;
      sessionStorage.setItem('currentUser', payload)
    },

    setToken(state, {payload}) {
      state.token = payload;
      sessionStorage.setItem('token', payload)
    },

  },
});

export const { setToken, setCurrentUser } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


