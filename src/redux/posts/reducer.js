import { createReducer } from '@reduxjs/toolkit';

import { SET_POSTS_DATA } from './constants';

const initialState = {
  data: [],
  total_items: 10,
};

export const postsReducer = createReducer(initialState, {
  [SET_POSTS_DATA]: (state, action) => {
    state.data = action.payload.data;
    state.total_items = ++action.payload.total_items;
  },
});
