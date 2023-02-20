export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const exitsItem = state.cartItems.find(
                (x) => x.product === item.product
            );
    }
};
