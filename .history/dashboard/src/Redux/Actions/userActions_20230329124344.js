import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
} from '../Constants/UserConstants.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from './../Url.js';

// LOGIN
export const login = (email, password) => async (dispatch) => {
    const ToastObjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 1500,
    };
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.post(
            `${URL}/api/users/login`,
            { email, password },
            config
        );

        if (!data.isAdmin === true) {
            toast.error('Bạn không phải Admin', ToastObjects);
            dispatch({
                type: USER_LOGIN_FAIL,
            });
        } else {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        }

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Không có quyền') {
            dispatch(logout());
        }
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: message,
        });
    }
};

// LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGOUT,
    });
    dispatch({
        type: USER_LIST_RESET,
    });

    document.location.href = '/login';
};

// ALL USER
export const listUser = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`${URL}/api/users`, config);

        dispatch({ type: USER_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Không có quyền') {
            dispatch(logout());
        }
        dispatch({
            type: USER_LIST_FAIL,
            payload: message,
        });
    }
};
// DELETE PRODUCT
export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        await axios.delete(`${URL}/api/users/${id}`, config);

        dispatch({ type: USER_DELETE_SUCCESS });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Không có quyền') {
            dispatch(logout());
        }
        dispatch({
            type: USER_DELETE_FAIL,
            payload: message,
        });
    }
};
