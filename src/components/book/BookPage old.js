import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
    constructor(props) {
        // Pass props back to parent
        super(props);        
    }

    //Submit Book handler
    submitBook(input) {
        alert('Submitted');
        this.props.createBook(input);
    }

    render() {
        // Title input tracker
        let titleInput;

        //return JSX
        return (
            <div>
                <h3>Books</h3>
                <ul>
                    { /* Traverse books array */ }
                    { this.props.books.map( (book, index) => <li key={index}>{book.title}</li> )}
                </ul>
                <div>
                    <h3>Books Form</h3>
                    <form onSubmit={ e => {
                        //Prevent default request
                        e.preventDefault();
                        //Assemble inputs
                        var input = { 
                            title: titleInput.value
                        };
                        //Call handler
                        this.submitBook(input);
                        //Reset form
                        e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node => titleInput = node}/>
                        <input type="submit" />
                    </form>
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
    }
};

//Map action to props
const mapDispatchToProps = (dispatch) => {
    return {
        //We can now use this.props.createBook
        createBook: (book) => dispatch(bookActions.createBook(book))
    }
};

//Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);

//export default Book;