import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './noteSlice';
import foldersReducer from './folderSlice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
    folders: foldersReducer,
  },
});

export default store;
