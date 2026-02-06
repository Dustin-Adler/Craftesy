import React from 'react';
import { Link } from 'react-router-dom';

class EmptyCart extends React.Component {
    render() {
        return (
            <div className="empty-cart-container">
                <h2>Your cart is empty</h2>
                <div className="empty-cart-done-shopping-button-container">
                    <button className="empty-cart-done-shopping-button">
                        Done Exploring?
                    </button>
                </div>
                <div className="empty-cart-links-container">
                    <Link to="/shop" className="empty-cart-link">
                        Continue Shopping
                    </Link>
                    <Link to="/shop" className="empty-cart-link">
                        Continue Shopping
                    </Link>
                    <Link to="/shop" className="empty-cart-link">
                        Continue Shopping
                    </Link>
                    <Link to="/shop" className="empty-cart-link">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        )
    }
}

export default EmptyCart;