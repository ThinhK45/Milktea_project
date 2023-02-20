import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
} from '../Constants/ProductConstants.js';
import axios from 'axios';
export const listProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        });
        const { data } = await axios;
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
