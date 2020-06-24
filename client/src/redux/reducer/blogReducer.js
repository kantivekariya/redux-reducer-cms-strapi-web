import * as types from "../action/actionTypes";

const initialState = {
  blogs: {
    data: [],
  },
  blogs_details: {
    data: []
  }
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
          ...action.payload,
        },
      };
    case types.BLOG_LIST_FAILURE:
      return draft;

    case types.GET_BLOG_REQUEST:
      return draft;
    case types.GET_BLOG_SUCCESS:
      return {
        ...draft,
        blogs_details: {
          ...draft.blogs_details,
          ...action.payload,
        },
      };
    case types.GET_BLOG_FAILURE:
      return draft;
    default:
      return draft;
  }
};
