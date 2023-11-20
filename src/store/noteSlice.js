import {createSlice} from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      const index = state.notes.indexOf(action.payload);
      state.notes.splice(index, 1);
    },
  },
});

export const {addNote, deleteNote} = noteSlice.actions;
export const selectNotes = state => state.notes.notes;
export default noteSlice.reducer;
