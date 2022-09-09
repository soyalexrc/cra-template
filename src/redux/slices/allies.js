
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  allies: [],
  currentAlly: {}
};

const slice = createSlice({
  name: "allies",
  initialState,
  reducers: {
    setAllies(state, {payload}) {
      state.allies = payload;
    },
    setCurrentAlly(state, {payload}) {
      state.currentAlly = payload;
    },

    removeAlly(state, {payload}) {
      const allies = [...state.allies];
      const index = allies.findIndex(user => user.id === payload);
      allies.splice(index, 1);
      state.allies = allies;
    }
  },
});

export const { setAllies, removeAlly, setCurrentAlly } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


