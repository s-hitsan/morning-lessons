import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppButton, AppField, PostItem, RequestHandler } from '../../components';
import { useDebounce } from '../../hooks/useDebounce';
import { getPosts } from '../../redux/operations';
import { addPost } from '../../redux/post-slice';
import { postApi } from '../../services/api';

export const Posts = () => {
  const {
    data: postsArray,
    isGetPostsLoading,
    total_items,
    isAddPostLoading,
  } = useSelector((state) => state.postsPage);

  const dispatch = useDispatch();

  const setPostsData = (payload) => dispatch();

  const { searchValue, setSearchValue, debouncedValue } = useDebounce('');

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts(debouncedValue));
  }, [debouncedValue]);

  const handlePostClick = (postId) => navigate(`/post/${postId}`);

  const handleDeletePost = async (postId) => {
    const deletePostResponse = await postApi.deletePost(postId);
    console.log(deletePostResponse);
    if (deletePostResponse?.status === 204) {
      setPostsData({
        data: postsArray?.filter((post) => {
          return +post?.id !== +postId;
        }),
      });
      toast.success('Post deleted successful!');
    }
  };

  const handleAddPost = (values) => {
    dispatch(addPost({ title: values.title, content: values.content }));
  };

  const initialValues = {
    title: '',
    content: '',
  };

  return (
    <div className='flex-column'>
      <Formik onSubmit={handleAddPost} initialValues={initialValues}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <AppField value={values.title} name='title' onInputChange={handleChange} />
            <AppField
              value={values.content}
              name='content'
              onInputChange={handleChange}
            />
            <AppButton
              type='submit'
              isDisabled={isAddPostLoading}
              tittle={isAddPostLoading ? 'Loading...' : 'Add note'}
              width='150px'
            />
          </form>
        )}
      </Formik>
      <div>
        <div className='divider' />
        <AppField
          value={searchValue}
          onInputChange={setSearchValue}
          placeholder='Search posts...'
        />
      </div>
      <RequestHandler isLoading={isGetPostsLoading}>
        <div>
          <p>{` total items: ${total_items}`}</p>
          <div>
            {postsArray?.map((post) => {
              return (
                <PostItem
                  onPostDeleteClick={handleDeletePost}
                  handlePostClick={handlePostClick}
                  key={post?.id}
                  post={post}
                />
              );
            })}
          </div>
        </div>
      </RequestHandler>
    </div>
  );
};
