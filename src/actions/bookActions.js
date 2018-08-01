import Axios from 'axios';
import * as actionTypes from './actionTypes';

//API URL
const apiUrl = 'http://5b59a227f294400014c9b826.mockapi.io/api/v1/book';
// const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

//Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books
  }
};

//Async Action
export const fetchBooks = () => {
  //Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    //returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        //Dispatch another action to consume data
        dispatch(fetchBooksSuccess(response.data))        
      })
      .catch( error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return(dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action to handle data
        dispatch(createBookSuccess(response.data));
      })
      .catch( error => {
        throw(error);
      });
  };
};

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  }
};

//Sync Action
export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};

//Async Action
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' + bookId)
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteBook = (bookId) => {
  return (dispatch) => {
    return Axios.delete(apiUrl + '/' + bookId)
      .then(response => {
        dispatch(deleteBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteBookSuccess = (bookItem) => {
  return {
    type: actionTypes.DELETE_BOOK_SUCCESS,
    payload: bookItem
  };
}

/*
export const createBook = (book) => {
  //return action
  return {
    //Unique identifier
    type: 'CREATE_BOOK',
    //Payload
    book
  }
};
*/