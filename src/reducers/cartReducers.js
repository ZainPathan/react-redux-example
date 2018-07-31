import * as actionTypes from '../actions/actionTypes';

export default ( state=[], action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART_SUCCESS: 
            return action.item;
        case actionTypes.FETCH_CART_SUCCESS:
            return action.items;
        case actionTypes.DELETE_CART_ITEM_SUCCESS:
            const newState = Object.assign([], state);
            console.log('newState : ', newState);
            const indexOfDeletedCartItem = state.findIndex((cartItem) => {
                return cartItem.id === action.id;
            });
            newState.splice(indexOfDeletedCartItem, 1);
            console.log('updated newState : ', newState);
            return newState;
        default:
            return state;
    }
};