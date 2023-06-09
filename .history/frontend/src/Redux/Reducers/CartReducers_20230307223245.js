import {
    CART_ADD_ITEM,
    CART_CLEAR_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_SIZE,
} from '../Constants/CartConstants.js';
import { CART_SAVE_SHIPPING_ADDRESS } from './../Constants/CartConstants';
export const cartReducer = (
    state = { cartItems: [], shippingAddress: {}, orderItems: [] },
    action
) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const exitsItem = state.cartItems.find(
                (x) => x.product === item.product
            );
            if (exitsItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === exitsItem.product ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.product !== action.payload
                ),
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case CART_SAVE_SIZE:
            return {
                ...state,
                orderItems: action.payload,
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        case CART_CLEAR_ITEM:
            return {
                ...state,
                cartItems: [],
            };

        default:
            return state;
    }
};
