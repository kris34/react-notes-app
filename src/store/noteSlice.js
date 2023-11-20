import {createSlice} from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push({text: action.payload});
    },
    deleteNote: (state, action) => {
      const index = state.notes.findIndex(obj => obj.text == action.payload);
      state.notes.splice(index, 1);
    },
    editNote: (state, action) => {},
  },
});

export const {addNote, deleteNote, editNote} = noteSlice.actions;
export const selectNotes = state => state.notes.notes;
export default noteSlice.reducer;
