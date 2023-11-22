import {createSlice} from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      const id = state.notes.length + 1;
      state.notes.push({text: action.payload, id: id});
    },
    deleteNote: (state, action) => {
      const index = state.notes.findIndex(obj => obj.id == action.payload.id);
      state.notes.splice(index, 1);
    },
    editNote: (state, action) => {
      const index = Number(action.payload.id) - 1;
      //   console.log(action.payload.newContent);
      state.notes.splice(index, 1, action.payload.newContent);
    },
  },
});

export const {addNote, deleteNote, editNote} = noteSlice.actions;
export const selectNotes = state => state.notes.notes;
export default noteSlice.reducer;
