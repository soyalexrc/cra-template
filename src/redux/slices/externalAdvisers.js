
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  advisers: [],
  currentAdviser: {}
};

const slice = createSlice({
  name: "externalAdvisers",
  initialState,
  reducers: {
    setAdvisers(state, {payload}) {
      state.advisers = payload;
    },
    setCurrentAdviser(state, {payload}) {
      state.currentAdviser = payload;
    },

    removeAdviser(state, {payload}) {
      const advisers = [...state.advisers];
      const index = advisers.findIndex(user => user.id === payload);
      advisers.splice(index, 1);
      state.advisers = advisers;
    }
  },
});

export const { setAdvisers, removeAdviser, setCurrentAdviser } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


