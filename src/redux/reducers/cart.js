const initialState = {
    itemsInCart: []
};

export default (state = initialState, {
    payload,
    type
}) => {
    switch (type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                itemsInCart: [...state.itemsInCart, payload]
            };

        case 'REMOVE_ITEM_IN_CART':
            return {
                ...state,
                itemsInCart: state.itemsInCart.filter(item => item.name !== payload.name)
            }
        default:
            return state;
    }
};