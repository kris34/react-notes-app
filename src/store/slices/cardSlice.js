import { createSlice } from '@reduxjs/toolkit'

initialState = { 
    notes: []
}

export const cardSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.note = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNote } = noteSlice.actions

export const selectNote  = state => state.note.note

export default counterSlice.reducer