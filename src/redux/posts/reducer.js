const initialState = {
  data: [],
  total_items: 10,
};

export const postsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_POSTS_DATA':
      return {
        ...state,
        data: action.payload.data,
        total_items: action.payload.total_items,
      };
    default:
      return state;
  }
};

export const postsAction = (payload) => {
  return { type: 'SET_POSTS_DATA', payload };
};