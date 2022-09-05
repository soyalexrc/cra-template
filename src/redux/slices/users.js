
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  users: [],
  currentUser: {}
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, {payload}) {
      state.users = payload;
    },
    setCurrentUser(state, {payload}) {
      state.currentUser = payload;
    },

    removeUser(state, {payload}) {
      const users = [...state.users];
      const index = users.findIndex(user => user.id === payload);
      users.splice(index, 1);
      state.users = users;
    }
  },
});

export const { setUsers, removeUser, setCurrentUser } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


