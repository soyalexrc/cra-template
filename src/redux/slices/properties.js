
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  properties: {},
  currentProperty: {},
  history: {}
};

const slice = createSlice({
  name: "properties",
  initialState,
  reducers: {

    setCurrentProperty(state, {payload}) {
      state.currentProperty= payload;
    },

    setPropertyHistory(state, {payload}) {
      state.history= payload;
    },

    setProperties(state, {payload}) {
      state.properties = payload;
    },

    removeProperty(state, {payload}) {
      const properties = {...state.properties};
      const index = properties.data.findIndex(property => property.id === payload);
      properties.data.splice(index, 1);
      properties.total -= 1;
      state.properties = properties;
    }
  },
});

export const { setCurrentProperty, setProperties, removeProperty, setPropertyHistory } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


