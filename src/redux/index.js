import { configureStore } from '@reduxjs/toolkit';

import notesReducer from './notes-slice';
import postsReducer from './post-slice';

const rootReducer = {
  postsPage: postsReducer,
  notesPage: notesReducer,
};

export const store = configureStore({ reducer: rootReducer });
