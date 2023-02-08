import { ADD_NOTE, DELETE_NOTE } from './constants';

const initialState = {
  notes: [{ id: 0, isCheked: false, tittle: 'First' }],
  total_items: 1,
  notesLastId: 1,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          { tittle: action.payload.tittle, id: state.notesLastId, isCheked: false },
        ],
        notesLastId: ++state.notesLastId,
        total_items: ++state.total_items,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};
