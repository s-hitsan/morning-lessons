export const selectNotesPage = (state) => {
  const { notes, searchString } = state.notesPage;
  const filteredNotes = notes.filter((el) =>
    el.tittle.toLowerCase().includes(searchString.toLowerCase()),
  );
  console.log(filteredNotes);

  return { notes: filteredNotes, searchString };
};
