import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppButton, AppField, PostItem } from '../../components';
import { useDebounce } from '../../hooks/useDebounce';
import { postsAction } from '../../redux/posts/reducer';
import { postApi } from '../../services/api';

export const Posts = () => {
  const postsData = useSelector((state) => state.postsPage);

  const dispatch = useDispatch();

  const setPostsData = (payload) => dispatch(postsAction(payload));

  const { searchValue, setSearchValue, debouncedValue } = useDebounce('');

  const [isPostsDataloading, setisPostsDataloading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getPostsRequest(debouncedValue);
  }, [debouncedValue]);

  const handlePostClick = (postId) => navigate(`/post/${postId}`);

  const getPostsRequest = async (searchString) => {
    setisPostsDataloading(true);
    const response = await postApi.getPosts(searchString);
    setisPostsDataloading(false);
    setPostsData(response?.data);
  };

  const handleDeletePost = async (postId) => {
    const deletePostResponse = await postApi.deletePost(postId);
    console.log(deletePostResponse);
    if (deletePostResponse?.status === 204) {
      setPostsData({
        total_items: --postsData.total_items,
        data: postsData?.data?.filter((post) => {
          return +post?.id !== +postId;
        }),
      });
      toast.success('Post deleted successful!');
    }
  };

  const handleAddPost = async (values) => {
    const addPostResponse = await postApi.addPost({
      title: values.title,
      content: values.content,
      image: 'string',
      preview_image: 'string',
    });
    if (addPostResponse?.status === 200) {
      setPostsData({
        total_items: ++postsData.total_items,
        data: [addPostResponse?.data, ...postsData.data],
      });
      toast.success('Post added successful!');
    }
  };

  const initialValues = {
    title: '',
    content: '',
  };

  return (
    <div className='flex-column'>
      <Formik onSubmit={handleAddPost} initialValues={initialValues}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <AppField value={values.title} name='title' onInputChange={handleChange} />
            <AppField
              value={values.content}
              name='content'
              onInputChange={handleChange}
            />
            <AppButton
              type='submit'
              isDisabled={isSubmitting}
              tittle={isSubmitting ? 'Loading...' : 'Add note'}
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
                  handlePostClick={handlePostClick}
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
