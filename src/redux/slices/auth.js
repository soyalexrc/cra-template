import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  currentUser: {},
  token: null
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setCurrentUser(state, {payload}) {
      state.currentUser= payload;
      localStorage.setItem('currentUser', payload)
    },

    setToken(state, {payload}) {
      state.token = payload;
      localStorage.setItem('token', payload)
    },

  },
});

export const { setToken, setCurrentUser } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


