import React from 'react';
import { connect } from 'react-redux';
// import * as bookActions from '../../actions/bookActions';
import * as cartActions from '../../actions/cartActions';

class CartPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchCart();
    }

    deleteCartItem(item) {
        console.log('item : ', item);
        this.props.deleteCartItem(item.id);
    }

    render() {
        return (
            <div>
                <h1>Cart Page</h1>
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    { this.props.items !== undefined && this.props.items.length > 0 && this.props.items.map( (item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td className="cart-delete-link" onClick={this.deleteCartItem.bind(this, item)}>Delete</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: () => dispatch(cartActions.fetchCart()),
        deleteCartItem: (cartItemId) => dispatch(cartActions.deleteCartItem(cartItemId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

// export default CartPage;