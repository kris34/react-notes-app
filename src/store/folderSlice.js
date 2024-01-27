import { createSlice } from '@reduxjs/toolkit';

const folderSlice = createSlice({
  name: 'folders',
  initialState: {
    folders: [],
  },
  reducers: {
    addFolder: (state, action) => {
      const id = state.folders.length + 1;
      state.folders.push({ name: action.payload, id: id, notes: [] });
    },
    deleteFolder: (state, action) => {
      const index = state.notes.findIndex(obj => obj.id == action.payload.id);
      state.notes.splice(index, 1);
    },
    addToFolder: (state, action) => {

    },
  },
});

export const { addFolder, deleteFolder } = folderSlice.actions;
export const selectFolders = state => state.folders.folders;
export default folderSlice.reducer;
