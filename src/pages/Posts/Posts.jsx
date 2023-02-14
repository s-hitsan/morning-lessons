import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppButton, AppField, PostItem, RequestHandler } from '../../components';
import { useDebounce } from '../../hooks/useDebounce';
import { useAddPostMutation, useGetPostsQuery } from '../../services/rtk-api';

export const Posts = () => {
  const { searchValue, setSearchValue, debouncedValue } = useDebounce('');

  const { data: getPostsData, isLoading: isGetPostsLoading } =
    useGetPostsQuery(debouncedValue);

  const [addPost, { data, isLoading: isAddPostLoading }] = useAddPostMutation();

  const navigate = useNavigate();

  const handlePostClick = (postId) => navigate(`/post/${postId}`);

  const handleDeletePost = async (postId) => {
    // const deletePostResponse = await postApi.deletePost(postId);
    // console.log(deletePostResponse);
    // if (deletePostResponse?.status === 204) {
    //   setPostsData({
    //     data: postsArray?.filter((post) => {
    //       return +post?.id !== +postId;
    //     }),
    //   });
    //   toast.success('Post deleted successful!');
    // }
  };

  const handleAddPost = (values) => {
    addPost({ title: values.title, content: values.content });
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
          <p>{` total items: ${getPostsData?.total_items}`}</p>
          <div>
            {getPostsData?.data?.map((post) => {
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
