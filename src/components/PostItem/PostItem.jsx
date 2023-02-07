import './PostItem.scss';

import { useNavigate } from 'react-router-dom';

import { DeleteIcon } from '../Icons';

export const PostItem = ({ post, onPostDeleteClick, handlePostClick }) => {
  return (
    <div onClick={() => handlePostClick(post.id)} className='post__item_wrapper'>
      <div className='post__item_info'>
        <p>{post.title}</p>
      </div>
      <div>
        <div onClick={() => onPostDeleteClick(post.id)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
