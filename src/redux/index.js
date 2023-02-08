import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';

import { notesReducer } from './notes/reducer';
import { postsReducer } from './posts/reducer';

const rootReducer = combineReducers({
  postsPage: postsReducer,
  notesPage: notesReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
