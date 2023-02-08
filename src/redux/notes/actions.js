import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNoteAction = (payload) => {
  return { type: ADD_NOTE, payload };
};

export const deleteNoteAction = (payload) => {
  return { type: DELETE_NOTE, payload };
};
