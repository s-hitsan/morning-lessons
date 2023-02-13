import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { postApi } from '../services/api';

const initialState = {
  data: [],
  total_items: null,
  isGetPostsLoading: false,
  isAddPostLoading: false,
  error: null,
};

export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ title = '', content = '' }) => {
    try {
      const addPostResponse = await postApi.addPost({
        title: title,
        content: content,
        image: 'string',
        preview_image: 'string',
      });
      return addPostResponse.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deletePost = createAsyncThunk(
  'posts/addPost',
  async ({ title = '', content = '' }) => {
    try {
      const addPostResponse = await postApi.addPost({
        title: title,
        content: content,
        image: 'string',
        preview_image: 'string',
      });
      return addPostResponse.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    getPostsInProgress(state) {
      state.isGetPostsLoading = true;
    },
    getPostsSuccess(state, action) {
      state.error = null;
      state.data = action.payload.data;
      state.total_items = action.payload.total_items;
    },
    getPostsError(state, action) {
      state.error = action.payload;
    },
    getPostsFinished(state) {
      state.isGetPostsLoading = false;
    },
  },
  extraReducers: {
    [addPost.pending](state) {
      state.isAddPostLoding = true;
    },
    [addPost.fulfilled](state, action) {
      state.error = null;
      state.data.unshift(action.payload);
      ++state.total_items;
      toast.success('Post added');
      state.isAddPostLoding = false;
    },
    [addPost.rejected](state, action) {
      console.log(action);
      state.error = action.payload;
      toast.error(action.payload);
      state.isAddPostLoding = false;
    },
  },
});

export const { getPostsInProgress, getPostsSuccess, getPostsError, getPostsFinished } =
  postsSlice.actions;

export default postsSlice.reducer;
