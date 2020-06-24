// import * as types from "../action/actionTypes";

// const initialState = {
//     popular_blog: {
//         data: []
//     }
// };

// export const blogPopularReducer = (draft = initialState, action) => {
//     switch (action.type) {
//         case types.GET_PUPULAR_BLOG_LIST_REQUEST:
//             return draft;
//         case types.GET_PUPULAR_BLOG_LIST_SUCCESS:
//             return {
//                 ...draft,
//                 popular_blog: {
//                     ...draft.popular_blog,
//                     ...action.payload,
//                 },
//             };
//         case types.GET_PUPULAR_BLOG_LIST_FAILURE:
//             return draft;

//         default:
//             return draft;
//     }
// };
