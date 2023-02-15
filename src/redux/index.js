import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { authApi } from '../services/auth-api';
import { postRtkApi } from '../services/rtk-api';
import notesReducer from './notes-slice';
import postsReducer from './post-slice';

const rootReducer = combineReducers({
  notesPage: notesReducer,
  postsPage: postsReducer,
  [postRtkApi?.reducerPath]: postRtkApi?.reducer,
  [authApi?.reducerPath]: authApi?.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postRtkApi?.middleware, authApi?.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
