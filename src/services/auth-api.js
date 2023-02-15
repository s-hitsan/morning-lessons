import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LocalStorageAdapter } from './LocalStorageAdapter';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://70.34.201.18:4444/',
    prepareHeaders: (headers) => {
      if (LocalStorageAdapter.token) {
        headers.set('authorization', `Bearer ${LocalStorageAdapter.token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (values) => ({
        url: 'users/create',
        method: 'POST',
        body: values,
      }),
    }),
    getUser: build.query({
      query: () => ({
        url: 'users/profile',
        method: 'GET',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          LocalStorageAdapter.deleteToken();
        }
      },
    }),
    login: build.mutation({
      query: (values) => ({
        url: 'users/login',
        method: 'POST',
        body: values,
      }),
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          LocalStorageAdapter.token = data?.access_token;
        } catch (err) {}
      },
    }),
  }),
});

export const { useCreateUserMutation, useLoginMutation, useLazyGetUserQuery } = authApi;
