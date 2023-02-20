import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
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
        dispatch({
            const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Không có quyền') {
            dispatch(logout());
        }
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: message,
        });
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
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
