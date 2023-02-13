import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { postApi } from '../services/api';
import {
  getPostsError,
  getPostsFinished,
  getPostsInProgress,
  getPostsSuccess,
} from './post-slice';

export const getPosts = (searchString) => async (dispatch) => {
  try {
    dispatch(getPostsInProgress());
    const response = await postApi.getPosts(searchString);
    dispatch(getPostsSuccess(response.data));
  } catch (e) {
    dispatch(getPostsError(e.message));
  } finally {
    dispatch(getPostsFinished());
  }
};
