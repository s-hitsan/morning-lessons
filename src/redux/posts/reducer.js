import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  total_items: 10,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    setPostsData(state, action) {
      state.data = action.payload.data;
      state.total_items = ++action.payload.total_items;
    },
  },
});

export const { setPostsData } = postsSlice.actions;

export default postsSlice.reducer;
