import { configureStore } from '@reduxjs/toolkit';

import { notesReducer } from './notes/reducer';
import postsReducer from './posts/reducer';

const rootReducer = {
  postsPage: postsReducer,
  notesPage: notesReducer,
};

export const store = configureStore({ reducer: rootReducer });
