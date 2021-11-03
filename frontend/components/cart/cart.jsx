import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCaretDown,
    faHandshake, 
    faShippingFast, 
    faStore, 
    faTag 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        const currentDate = new Date().toDateString()
        const cartItems = this.props.cart.map(
            (cartItem, i) => {
                // debugger
                return (
                    <div 
                        className='cart-item-column-container item-seperator'
                        key={i}>
                        <div className='cart-item-row-container'>
                            <div className='cart-item-row-container center' >
                                <div className='shop-icon'><FontAwesomeIcon icon={faStore}/></div>
                                <h3>Thank you for using Craftesy</h3>
                            </div>
                            <div className='center'>Link peronal page here</div>
                        </div>
                        <div className='cart-item-row-container'>
                            <div className='cart-item-row-container cart-item-info'>
                                <Link
                                    className='link' 
                                    to={`/products/${cartItem.id}`}>
                                    <img 
                                        className='cart-item-img' 
                                        src={cartItem.images[0].url} 
                                        alt={cartItem.name}/>
                                </Link>
                                <div className='cart-item-column-container padding-left'>
                                    <div className='cart-item-column-container '>
                                        <Link
                                            className='text-link'
                                            to={`/products/${cartItem.id}`}>
                                            <div>{cartItem.name}</div>
                                        </Link>
                                        <div className='cart-item-options'></div>
                                    </div>
                                    <div className='sr-buttons'>
                                        <button
                                            className='plainify-button'>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item-column-container column-right'>
                                <div className='cart-item-row-container width cart-item-info '>
                                    <div className='relative'>
                                        <select className='item-quantity'>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        <FontAwesomeIcon 
                                            icon={faCaretDown} 
                                            className='fa-caret-down'/>
                                    </div>
                                    <div>
                                        <h3>$ {cartItem.price.toFixed(2)}</h3>
                                        <p>($ {cartItem.price.toFixed(2)} each)</p>
                                    </div>
                                </div>
                                <div className='popularity'>
                                    XX people have this in their cart
                                </div>
                            </div>
                        </div>
                        <div className='cart-item-row-container'>
                            <div className='cart-item-row-container start'>
                                <input
                                    className='checkbox' 
                                    type="checkbox" />
                                <div className='cart-item-column-container'>
                                    <h6>Would you like this as a gift?</h6>
                                    <p className='greyed-out'>
                                        Prices aren't real this is a demo
                                    </p>
                                </div>
                            </div>
                            <button className='plainify-button center'>
                                <FontAwesomeIcon icon={faTag} className='coupon-tag center'/>
                                Apply shop coupon codes
                            </button>
                        </div>
                        <div className='cart-item-row-container'>
                            <textarea 
                                placeholder="Add a note to Craftesy (optional)">
                            </textarea>
                            <div className='cart-item-column-container column-right delivery-info'>
                                <p>
                                    Estimated delivery: 
                                    <span>{currentDate}</span>
                                </p>
                                <p>from: The Interweb</p>
                            </div>
                        </div>
                    </div>
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