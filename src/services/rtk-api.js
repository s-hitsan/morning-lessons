import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postRtkApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://70.34.201.18:8080/' }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (searchValue = '') => ({
        url: `posts?search=${searchValue}`,
        method: 'GET',
      }),
    }),
    addPost: build.mutation({
      query: (arg) => ({
        url: 'posts/',
        method: 'POST',
        body: { ...arg, image: 'string', preview_image: 'string' },
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postRtkApi;
