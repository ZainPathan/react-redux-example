import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { Link } from 'react-router';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
    constructor(props) {
        super(props);
        // this.deleteBook.bind(this);
    }

    submitBook(input) {
        this.props.createBook(input);
    }

    deleteBook(bookId) {
        this.props.deleteBook(bookId);
    }

    render() {
        // let titleInput;
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3>Books</h3>
                    <table className="table books-table">
                        <thead>
                            <tr>
                                <th>
                                    <td>Title</td>
                                    <td>Actions</td>
                                </th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {this.props.books.map( (book, index) => (
                                <tr key={index}>
                                    <td>{book.title}</td>
                                    <td>
                                        <Link to={`/book/${book.id}`}>View</Link>
                                        &nbsp;
                                        <a onClick={this.deleteBook.bind(this, book.id)}>Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>New Book</h3>
                    { /* Import and inject Book Form*/ }
                    <BookForm submitBook={this.submitBook.bind(this)} />
                </div>
            </div>
        );
    }
}

//Map state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        //We can now use this.props.books
        books: state.books
    };
};

//Map action to props
const mapDispatchToProps = (dispatch) => {
    return {
        //We can now use this.props.createBook
        createBook: (book) => dispatch(bookActions.createBook(book)),
        deleteBook: (bookId) => dispatch(bookActions.deleteBook(bookId))
    };
};

//Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);