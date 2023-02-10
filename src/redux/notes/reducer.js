import { createReducer } from '@reduxjs/toolkit';

import { ADD_NOTE, DELETE_NOTE } from './constants';

const initialState = {
  notes: [{ id: 0, isCheked: false, tittle: 'First' }],
  total_items: 1,
  notesLastId: 1,
};

export const notesReducer = createReducer(initialState, {
  [ADD_NOTE]: (state, action) => {
    state.notes.push({
      tittle: action.payload.tittle,
      id: state.notesLastId,
      isCheked: false,
    });
    ++state.notesLastId;
    ++state.total_items;
  },
  [DELETE_NOTE]: (state, action) => {
    state.notes.filter((note) => note.id !== action.payload.id);
  },
});
