import { CART_ADD_ITEM } from '../Constants/CartConstants.js';
export const cartReducer = (state = { cartItems: [] }, action) => {
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
                    cartItems: state.cartItems.filter(
                        (x) => x.product !== action.payload
                    ),
                };
            }
        default:
            return state;
    }
};
