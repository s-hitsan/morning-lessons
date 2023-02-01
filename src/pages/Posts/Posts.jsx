import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AppButton, AppField, PostItem } from '../../components';
import { postApi } from '../../services/api';

export const Posts = () => {
  const [postsData, setPostsData] = useState({});

  const [inputValue, setInputValue] = useState('');

  const [isPostsDataloading, setisPostsDataloading] = useState(true);

  const handleSetInputValue = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const getPostsRequest = async () => {
      setisPostsDataloading(true);
      const response = await postApi.getPosts();
      setisPostsDataloading(false);
      setPostsData(response?.data);
    };
    getPostsRequest();
  }, []);

  const handleDeletePost = async (postId) => {
    const deletePostResponse = await postApi.deletePost(postId);
    console.log(deletePostResponse);
    if (deletePostResponse?.status === 204) {
      setPostsData((prevState) => {
        return {
          ...prevState,
          total_items: --prevState.total_items,
          data: prevState?.data?.filter((post) => {
            return +post?.id !== +postId;
          }),
        };
      });
      toast.success('Post deleted successful!');
    }
  };

  const handleAddPost = async () => {
    const addPostResponse = await postApi.addPost({
      title: inputValue,
      content: 'string',
      image: 'string',
      preview_image: 'string',
    });
    if (addPostResponse?.status === 200) {
      setInputValue('');
      setPostsData((prevState) => {
        return {
          ...prevState,
          total_items: ++prevState.total_items,
          data: [addPostResponse?.data, ...prevState.data],
        };
      });
      toast.success('Post added successful!');
    }
  };

  return (
    <div className='d-flex justify-content-center flex-column  align-items-center'>
      <AppField value={inputValue} onInputChange={handleSetInputValue} />
      <AppButton onClick={handleAddPost} tittle='Add note' width='150px' />
      {isPostsDataloading ? (
        <p>is Loading....</p>
      ) : (
        <div>
          <p>{` total items: ${postsData?.total_items}`}</p>
          <div>
            {postsData?.data?.map((post) => {
              return (
                <PostItem
                  onPostDeleteClick={handleDeletePost}
                  key={post?.id}
                  post={post}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
