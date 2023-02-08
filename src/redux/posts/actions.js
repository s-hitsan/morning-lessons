import { SET_POSTS_DATA } from './constants';

export const postsAction = (payload) => {
  return { type: SET_POSTS_DATA, payload };
};
