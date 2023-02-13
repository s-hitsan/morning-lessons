import { configureStore } from '@reduxjs/toolkit';

import notesReducer from './notes-slice';
import postsReducer from './post-slice';

const rootReducer = {
  notesPage: notesReducer,
  postsPage: postsReducer,
};

export const store = configureStore({ reducer: rootReducer });
