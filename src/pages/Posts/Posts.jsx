import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AppButton, AppField, PostItem } from '../../components';
import { useDebounce } from '../../hooks/useDebounce';
import { postApi } from '../../services/api';

export const Posts = () => {
  const [postsData, setPostsData] = useState({});

  const { searchValue, setSearchValue, debouncedValue } = useDebounce('');

  const [isPostsDataloading, setisPostsDataloading] = useState(true);

  const getPostsRequest = async (searchString) => {
    setisPostsDataloading(true);
    const response = await postApi.getPosts(searchString);
    setisPostsDataloading(false);
    setPostsData(response?.data);
  };

  useEffect(() => {
    getPostsRequest(debouncedValue);
  }, [debouncedValue]);

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

  const handleAddPost = async (values) => {
    const addPostResponse = await postApi.addPost({
      title: values.title,
      content: values.content,
      image: 'string',
      preview_image: 'string',
    });
    if (addPostResponse?.status === 200) {
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

  const initialValues = {
    title: '',
    content: '',
  };

  return (
    <div className='d-flex justify-content-center flex-column  align-items-center'>
      <div>
        <AppField
          value={searchValue}
          onInputChange={setSearchValue}
          label='Search posts'
        />
        <div className='divider' />
      </div>
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
