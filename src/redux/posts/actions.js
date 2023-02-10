import { createAction } from '@reduxjs/toolkit';

import { SET_POSTS_DATA } from './constants';

export const postsActionCreator = createAction(SET_POSTS_DATA);
