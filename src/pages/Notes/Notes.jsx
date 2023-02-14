import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton, AppField, NoteItem } from '../../components';
import { useDebounce } from '../../hooks/useDebounce';
import {
  addNote as addNoteAction,
  deleteNote as deleteNoteAction,
  setSearchString,
} from '../../redux/notes-slice';
import { selectNotesPage } from '../../redux/selectors';

export const Notes = () => {
  const [inputValue, setInputValue] = useState('');

  const { notes, searchString } = useSelector(selectNotesPage);

  const dispatch = useDispatch();

  const setSearchValue = (e) => dispatch(setSearchString(e.target.value));

  const onNoteAddButtonClick = () => {
    dispatch(addNoteAction({ tittle: inputValue }));
    setInputValue('');
  };

  const onNoteDeleteClick = (id) => dispatch(deleteNoteAction({ id }));

  const handleInputChange = (e) => setInputValue(e?.target?.value);

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
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div>
          <AppField value={inputValue} onInputChange={handleInputChange} />
          <AppButton onClick={onNoteAddButtonClick} tittle='Add note' width='150px' />
        </div>
        <div>
          <div className='divider' />
          <AppField
            value={searchString}
            onInputChange={setSearchValue}
            placeholder='Search posts...'
          />
        </div>
      </div>
      <div>
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
