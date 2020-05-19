import axios from 'axios';
import * as types from './actionTypes';
import config from '../../_config';

export function getAllBlogs(filters = {}) {

    return async (dispatch) => {
        dispatch({ type: types.BLOG_LIST_REQUEST });
        try {
            const res = await axios.get(`${config.BASE_URL}/blogs`, {
                params: params,
            });
            dispatch({ type: types.BLOG_LIST_SUCCESS, payload: res });
            return res;
        } catch (error) {
            dispatch({ type: types.BLOG_LIST_FAILURE });
            return Promise.reject(error);
        }
    };
}