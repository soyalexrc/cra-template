
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  attributes: [],
};

const slice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    setAttributes(state, {payload}) {
      state.attributes = payload;
    },

    removeAttribute(state, {payload}) {
      const attributes = [...state.attributes];
      const index = attributes.findIndex(property => property.id === payload);
      attributes.splice(index, 1);
      state.attributes = attributes;
    }
  },
});

export const { setAttributes, removeAttribute } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


