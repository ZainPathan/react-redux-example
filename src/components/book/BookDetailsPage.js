import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookDetails from './BookDetails';
import * as bookActions from '../../actions/bookActions';
import * as cartActions from '../../actions/cartActions';

class BookDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchBookById(this.props.params.id);
    }

    addToCart(book) {
        const item = {
            title: book.title,
            price: book.price
        };
        this.props.addToCart(item);
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
                <BookDetails book={this.props.book} addToCart={this.addToCart.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        //state mappings here
        book: state.book
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //action mappings here
        /**
         * This dipatch will trigger the 
         * AJAX request we setup in 
         * our actions
         */
        fetchBookById: (bookId) => dispatch(bookActions.fetchBookById(bookId)),
        addToCart: (item) => dispatch(cartActions.addToCart(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);