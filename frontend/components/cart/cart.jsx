import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHandshake, 
    faShippingFast, 
    faTag 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartItem from './cart-item'

class Cart extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.getCartItems();
    }

    render() {
        // debugger
        if (!this.props.cart) {
            return (null)
        } 
        const cartItems = this.props.cart.map(
            (cartItem, i) => {
                // debugger
                return (
                    <CartItem 
                        key={i}
                        cartItem={cartItem}/>
                )
            }
        )

        return (
            <div className='cart-container'>
                <div className='cart'>
                    <div className='cart-items'>
                        <h2 
                            className='item-count-header'>
                            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
                        </h2>
                        {cartItems}
                    </div>
                    <div className='cart-item-column-container money-stuff'>
                        <div className='cart-item-row-container'>
                            <span></span>
                            <Link
                                className='text-link' 
                                to='/'>
                                <h3 className='shopping'>Keep shopping</h3>
                            </Link>
                        </div>

                        <div className='payment-info'>
                            <div className='cart-item-column-container'>
                                <h3 className='payment-spacing'>How you'll pay</h3>
                                <label htmlFor="">
                                    <div className='radio-buttons'>
                                        <div className='cart-item-row-container start center'>
                                            <input type="radio" name="payment-option" />
                                            <div className='cart-item-row-container start width'>
                                                <i className="fab fa-cc-mastercard"></i> 
                                                <i className="fab fa-cc-visa"></i> 
                                                <i className="fab fa-cc-amex"></i> 
                                                <i className="fab fa-cc-discover"></i>
                                            </div>
                                        </div>
                                        <div className='cart-item-row-container start center'>
                                            <input type="radio" name="payment-option" />
                                            <div className='cart-item-row-container start width center'>
                                                <i className="fab fa-cc-paypal"></i>
                                            </div>
                                        </div>
                                        <div className='cart-item-row-container start center'>
                                            <input type="radio" name="payment-option"/>
                                            <div className='cart-item-row-container start width center'>
                                                <i className="far fa-credit-card"></i> 
                                                <p>Klarna, 4 interest-free installments</p>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                                <p className='klarna-info'>Pay in 4 installments of Math. Klarna. Learn Klarna</p>
                            </div>
                            <div className='cart-total'>
                                <div className='cart-item-row-container'>
                                    <h3>Item(s) total</h3>
                                    <div>Cart Total Price</div>
                                </div>
                                <div className='cart-item-row-container payment-spacing divider'>
                                    <h3>Shop discount</h3>
                                    <div>Accumulated Discounts</div>
                                </div>
                                <div className='cart-item-row-container sub-total'>
                                    <div>Subtotal</div>
                                    <div>Total Price after Discounts</div>
                                </div>
                            </div>
                            <button className='cart-item-row-container start shipping'> {/*open modal for shipping information */}
                                <FontAwesomeIcon icon={faShippingFast}/>
                                <p className='mg-l width'>Get shipping cost</p>
                            </button>
                            <button className="checkout-button">Proceed to checkout</button>
                            <div className='
                                    cart-item-row-container
                                    craftesy-coupon-container 
                                    center'>
                                <div className='coupon-icon-bg'>
                                    <FontAwesomeIcon 
                                        icon={faTag} 
                                        className='coupon-icon'/>
                                </div>
                                <p className='width'>Apply Craftesy coupon code</p>
                            </div>
                            <p className='tax-info'>* No additional taxes or duties!</p>
                        </div>
                        <div className='contact-me cart-item-row-container'>
                            <p> 
                                Thank you so much for taking the time to traverse
                                Craftesy, my Etsy clone. It was a pleasure to work on,
                                and I hope that you liked what you saw enough to
                                contact me with any opportunities or inquieries you
                                might have.
                            </p>
                            <FontAwesomeIcon icon={faHandshake} className='handshake-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;