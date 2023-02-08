const initialState = {
  postsList: [],
  total_items: 10,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS_DATA':
      return {
        ...state,
        postsList: action.payload.postsList,
        total_items: action.payload.total_items,
      };
    default:
      return state;
  }
};

export const postsAction = (payload) => {
  return { type: 'SET_POSTS_DATA', payload };
};
