import './PostItem.scss';

import { DeleteIcon } from '../Icons';

export const PostItem = ({ post, onPostDeleteClick }) => {
  return (
    <div className='note__item_wrapper'>
      <p>{post.title}</p>
      <div>
        <div onClick={() => onPostDeleteClick(post.id)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
