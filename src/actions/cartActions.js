import Axios from 'axios';
import * as actionTypes from './actionTypes';

// Sync add to cart
export const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item
  };
};

// Async add to cart
export const addToCart = (item) => {
  console.log('Cart item : ', item);
  return (dispatch) => {
    // return Axios.post('http://57c64baac1fc8711008f2a82.mockapi.io/Cart', item)
    return Axios.post('http://5b59a227f294400014c9b826.mockapi.io/api/v1/cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

// Sync load cart
export const fetchCartSuccess = (items) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items
  };
};

// Async load cart
export const fetchCart = () => {
  return (dispatch) => {
    // return Axios.get('http://57c64baac1fc8711008f2a82.mockapi.io/Cart')
    return Axios.get('http://5b59a227f294400014c9b826.mockapi.io/api/v1/cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteCartItem = (cartItemId) => {
    return (dispatch) => {
        return Axios.delete('http://5b59a227f294400014c9b826.mockapi.io/api/v1/cart/'+cartItemId)
            .then( response => {
                dispatch(deleteCartItemSuccess(response.data))
            })
            .catch( error => {
                throw(error);
            });
    };
};

export const deleteCartItemSuccess = (deletedCartItem) => {
    console.log('deleteCartItemSuccess response : ', deletedCartItem);
    return {
        type: actionTypes.DELETE_CART_ITEM_SUCCESS,
        payload: deletedCartItem
    };
};

export const clearCart = (cartItems) => {
  return dispatch => {
    let promises = [];
    cartItems.forEach(function(cartItem) {
      promises.push(Axios.delete('http://5b59a227f294400014c9b826.mockapi.io/api/v1/cart/'+cartItem.id));
    });

    Axios.all(promises).then((results) => {
      dispatch(clearCartSuccess(results));
    })
    .catch( error => {
      throw(error);
    });
  };
};

// Making REST DELETE API calls in a loop
/* export const clearCart = (cartItems) => {
  console.log('Clear Cart fn called : ', cartItems);
  return dispatch => {
    let responseData = [];
    cartItems.forEach(cartItem => {
      Axios.delete('http://5b59a227f294400014c9b826.mockapi.io/api/v1/cart/'+cartItem.id)
        .then(response => {
          responseData.push(response.data);
          if( responseData.length == cartItems.length ) {
            console.log('All Cart Items deleted');
            dispatch(clearCartSuccess(responseData));
          }
        })
        .catch(error => {
          throw(error);
        });
    });
  };
}; */

export const clearCartSuccess = (responseData) => {
  return {
    type: actionTypes.CLEAR_CART_SUCCESS,
    payload: responseData
  };
};