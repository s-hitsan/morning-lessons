import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton, AppField, NoteItem } from '../../components';
import {
  addNote as addNoteAction,
  deleteNote as deleteNoteAction,
} from '../../redux/notes-slice';

export const Notes = () => {
  const [inputValue, setInputValue] = useState('');

  const { notes } = useSelector((state) => state.notesPage);

  const dispatch = useDispatch();

  const onNoteAddButtonClick = () => {
    dispatch(addNoteAction({ tittle: inputValue }));
    setInputValue('');
  };

  const onNoteDeleteClick = (id) => dispatch(deleteNoteAction({ id }));

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <div
      style={{
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <AppField value={inputValue} onInputChange={handleInputChange} />
        <AppButton onClick={onNoteAddButtonClick} tittle='Add note' width='150px' />
      </div>
      <div style={{ width: '655px' }}>
        {notes?.map((note) => {
          return (
            <NoteItem
              onNoteDeleteClick={onNoteDeleteClick}
              onNoteCheckClick={() => {}}
              el={note}
              key={note.id}
            />
          );
        })}
      </div>
    </div>
  );
};
