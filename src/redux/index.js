import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { postRtkApi } from '../services/rtk-api';
import notesReducer from './notes-slice';
import postsReducer from './post-slice';

const rootReducer = combineReducers({
  notesPage: notesReducer,
  postsPage: postsReducer,
  [postRtkApi?.reducerPath]: postRtkApi?.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postRtkApi?.middleware),
  devTools: true,
});
