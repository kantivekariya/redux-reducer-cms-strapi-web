import axios from "axios";
import * as types from "./actionTypes";
import config from "../../_config/Config";

export function getAllBlogs() {
  return async (dispatch) => {
    dispatch({ type: types.BLOG_LIST_REQUEST });
    try {
      const res = await axios.get(`${config.BASE_URL}/blog-posts`);
      dispatch({ type: types.BLOG_LIST_SUCCESS, payload: res });
      return res;
    } catch (error) {
      dispatch({ type: types.BLOG_LIST_FAILURE });
      return Promise.reject(error);
    }
  };
}

// export function getPopular() {
//   const param = {
//     _limit: 0,
//     _sort: 'createdAt:desc'
//   }
//   return async (dispatch) => {
//     dispatch({ type: types.GET_PUPULAR_BLOG_LIST_REQUEST });
//     try {
//       const res = await axios.get(`${config.BASE_URL}/blog-posts`, { param });
//       dispatch({ type: types.GET_PUPULAR_BLOG_LIST_SUCCESS, payload: res });
//       return res;
//     } catch (error) {
//       dispatch({ type: types.GET_PUPULAR_BLOG_LIST_FAILURE });
//       return Promise.reject(error);
//     }
//   };
// }

export function getBlogsById(BlogId) {
  return async (dispatch) => {
    dispatch({ type: types.GET_BLOG_REQUEST });
    try {
      const res = await axios.get(`${config.BASE_URL}/blog-posts/${BlogId}`);
      dispatch({ type: types.GET_BLOG_SUCCESS, payload: res });
      return res;
    } catch (error) {
      dispatch({ type: types.GET_BLOG_FAILURE });
      return Promise.reject(error);
    }
  };
}
