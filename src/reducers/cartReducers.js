import * as actionTypes from '../actions/actionTypes';

export default ( state=[], action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART_SUCCESS:
            return action.item;
        case actionTypes.FETCH_CART_SUCCESS:
            return action.items;
        case actionTypes.DELETE_CART_ITEM_SUCCESS: {
            /*
            const newState = Object.assign([], state);
            console.log('newState : ', newState);
            console.log('newState == state : '+(newState == state));
            const indexOfDeletedCartItem = state.findIndex((cartItem) => {
                return cartItem.id === action.id;
            });
            newState.splice(indexOfDeletedCartItem, 1);
            console.log('updated newState : ', newState); 
            */          
            const newState = state.filter(function(cartItem) {
                return cartItem.id !== action.payload.id; //TODO - check why action.id does not work over here??
            });
            console.log('newState : ', newState);
            console.log('newState == state : '+(newState == state));
            return newState;
        }
        default:
            return state;
    }
};