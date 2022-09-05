
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  owners: [],
  currentOwner: {}
};

const slice = createSlice({
  name: "owners",
  initialState,
  reducers: {
    setOwners(state, {payload}) {
      state.owners = payload;
    },
    setCurrentOwner(state, {payload}) {
      state.currentOwner = payload;
    },

    removeOwner(state, {payload}) {
      const owners = [...state.owners];
      const index = owners.findIndex(user => user.id === payload);
      owners.splice(index, 1);
      state.owners = owners;
    }
  },
});

export const { setOwners, removeOwner, setCurrentOwner } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


