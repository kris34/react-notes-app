import {createSlice} from '@reduxjs/toolkit';

const folderSlice = createSlice({
  name: 'folders',
  initialState: {
    folders: [],
  },
  reducers: {
    addFolder: (state, action) => {
      const id = state.folders.length + 1;
      state.folders.push({text: action.payload, notes: []});
    },
    deleteFolder: (state, action) => {
      const index = state.notes.findIndex(obj => obj.id == action.payload.id);
      state.notes.splice(index, 1);
    },
    addToFolder: (state, action) => {},
  },
});

export const {addFolder, deleteFolder} = folderSlice.actions;
export const selectFolders = state => state.folders.fodlers;
export default folderSlice.reducer;
