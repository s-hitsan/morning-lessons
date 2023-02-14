import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [{ id: 0, isCheked: false, tittle: 'First' }],
  total_items: 1,
  notesLastId: 1,
  searchString: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push({
        id: state.notesLastId,
        isCheked: false,
        tittle: action.payload.tittle,
      });
      ++state.notesLastId;
      ++state.total_items;
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    setSearchString(state, action) {
      state.searchString = action.payload;
    },
  },
});

export const { addNote, deleteNote, setSearchString } = notesSlice.actions;

export default notesSlice.reducer;
