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
      return action.books;

    case actionTypes.CREATE_BOOK_SUCCESS: 
      return [
        ...state,
        Object.assign({}, action.book)
      ];

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

    default: 
      return state;
  }
};