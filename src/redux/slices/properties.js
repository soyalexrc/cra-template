
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  properties: {},
  currentProperty: {},
};

const slice = createSlice({
  name: "properties",
  initialState,
  reducers: {

    setCurrentProperty(state, {payload}) {
      state.currentProperty= payload;
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

export const { setCurrentProperty, setProperties, removeProperty } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


