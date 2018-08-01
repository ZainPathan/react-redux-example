import * as actionTypes from '../actions/actionTypes';

// For handling an array of books
export const booksReducer = (state = [], action) => {
  switch(action.type) {
    //Check if action dispatched is CREATE_BOOK and act on it
    /*
    case 'CREATE_BOOK':
      //state.push(action.book);
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    */
    case actionTypes.FETCH_BOOKS_SUCCESS:
      console.log('FETCH_BOOKS_SUCCESS of booksReducer called ', actionTypes.FETCH_BOOKS_SUCCESS);
      return action.books;

    case actionTypes.CREATE_BOOK_SUCCESS: 
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    case actionTypes.DELETE_BOOK_SUCCESS: {
      const newState = Object.assign([], state);
      return newState.filter(function(bookItem) {
        return bookItem.id !== action.payload.id;
      });
      // console.log('new State : ', newState);
      // return newState;
    }
    default: 
      return state;
  }
};

// For handling a single book
export const bookReducer = (state = [], action) => {
  switch(action.type) {
    // Handle fetch by Id
    case actionTypes.FETCH_BOOK_BY_ID_SUCCESS:
      return action.book;
    /* added to check which reducer is called - ToBeRemoved */
    case actionTypes.FETCH_BOOKS_SUCCESS:
      console.log('FETCH_BOOKS_SUCCESS of bookReducer called ', actionTypes.FETCH_BOOKS_SUCCESS);
      console.log('action.books : ', action.books);
      return action.books;
      // return state;
    /* added to check which reducer is called - ToBeRemoved */
    default:
      return state;
  }
};