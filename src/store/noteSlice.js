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
    deleteNote: (state,action) => { 
        state.notes.filter()
    }
  },
});

export const {addNote} = noteSlice.actions;
export const selectNotes = state => state.notes.notes;
export default noteSlice.reducer;
