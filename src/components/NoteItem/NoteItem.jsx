import './NoteItem.scss';

import { DeleteIcon } from '../Icons';

export const NoteItem = ({ el, onNoteCheckClick, onNoteDeleteClick }) => {
  return (
    <div className='note__item_wrapper'>
      <p>{el.tittle}</p>
      <div>
        <input
          onChange={() => onNoteCheckClick(el.id)}
          value={el.isCheked}
          type='checkbox'
        />
        <div onClick={() => onNoteDeleteClick(el.id)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
