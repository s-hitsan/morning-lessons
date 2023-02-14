import { createSelector } from '@reduxjs/toolkit';

export const notesPage = (state) => state.notesPage;

export const selectNotesPage = createSelector([notesPage], ({ notes, searchString }) => {
  const filteredNotes = notes?.filter((el) => {
    return el.tittle.toLowerCase().includes(searchString.toLowerCase());
  });

  return { notes: filteredNotes, searchString };
});
