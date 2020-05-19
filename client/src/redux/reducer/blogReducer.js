import * as types from "../action/actionTypes";

const initialState = {
  blogs: {
    data: [],
  },
};

export const blogReducer = (draft = initialState, action) => {
  switch (action.type) {
    case types.BLOG_LIST_REQUEST:
      return draft;
    case types.BLOG_LIST_SUCCESS:
      return {
        ...draft,
        blogs: {
          ...draft.blogs,
          data: action.payload,
        },
      };
    case types.BLOG_LIST_FAILURE:
      return draft;
    default:
      return draft;
  }
};
