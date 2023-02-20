// USER DETAILS
import {
    ORDER_CREATE_RESET,
    ORDER_CREATE_SUCCESS,
} from '../Constants/OrderConstants';

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { ...state, loading: true };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, user: action.payload };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return { user: {} };
        default:
            return state;
    }
};
