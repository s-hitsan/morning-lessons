import { combineReducers, createStore } from 'redux';

import { postsReducer } from './posts/reducer';

const rootReducer = combineReducers({
  postsPage: postsReducer,
});

export const store = createStore(rootReducer);
