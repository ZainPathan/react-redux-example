import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';
import App from './components/App';
import BookDetailsPage from './components/book/BookDetailsPage';
import CartPage from './components/cart/CartPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}>About</Route>
    <Route path="/books" component={Book}></Route>
    <Route path="/book/:id" component={BookDetailsPage}></Route>
    <Route path="/cart" component={CartPage}></Route>
  </Route>
);