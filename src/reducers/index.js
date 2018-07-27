import { combineReducers } from 'redux';
// import {books} from './bookReducers';
import { bookReducer, booksReducer } from './bookReducers';
import cart from './cartReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  cart
});