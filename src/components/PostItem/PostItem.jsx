import './PostItem.scss';

import { useNavigate } from 'react-router-dom';

import { DeleteIcon } from '../Icons';

export const PostItem = ({ post, onPostDeleteClick }) => {
  const navigate = useNavigate();
  const handlePostClick = () => navigate(`/post/${post.id}`);

  return (
    <div onClick={handlePostClick} className='post__item_wrapper'>
      <div className='post__item_info'>
        <p>{post.title}</p>
        <p className='post__item_content'>{post.content}</p>
      </div>
      <div>
        <div onClick={() => onPostDeleteClick(post.id)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};