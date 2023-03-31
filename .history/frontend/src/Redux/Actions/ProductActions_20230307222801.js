import axios from 'axios';
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    // PRODUCT_SAVE_SIZE,
} from '../Constants/ProductConstants.js';
import { URL } from '../Url.js';
import { logout } from './userActions.js';
// PRODUCT LIST
export const listProduct =
    (keyword = ' ', pageNumber = ' ') =>
    async (dispatch) => {
        try {
            dispatch({
                type: PRODUCT_LIST_REQUEST,
            });
            const { data } = await axios.get(
                `${URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
            );
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

// PRODUCT DETAIL

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        });
        const { data } = await axios.get(`${URL}/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
// export const saveSize = (data) => (dispatch) => {
//     dispatch({
//         type: PRODUCT_SAVE_SIZE,
//         payload: data,
//     });
//     localStorage.setItem('orderItems', JSON.stringify(data));
// };

// PRODUCT REVIEW CREATE
export const createProductReview =
    (productId, review) => async (dispatch, getState) => {
        try {
            dispatch({
                type: PRODUCT_CREATE_REVIEW_REQUEST,
            });
            const {
                userLogin: { userInfo },
            } = getState();
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            await axios.post(
                `${URL}/api/products/${productId}/review`,
                review,
                config
            );
            dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            if (message === 'Không có quyền') {
                dispatch(logout());
            }
            dispatch({
                type: PRODUCT_CREATE_REVIEW_FAIL,
                payload: message,
            });
        }
    };
