import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_LIST_REQUEST,
} from '../Constants/UserConstants.js';
import axios from 'axios';
import { toast } from 'react-toastify';

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
            `/api/users/login`,
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

    document.location.href = '/login';
};

// ALL USER
export const listUser = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        });
        const config = {
            userLogin: { userInfo },
        };
        const { data } = await axios.post(
            `/api/users/login`,
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
