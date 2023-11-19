import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import notesReducer from '../notes/src/store/noteSlice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
