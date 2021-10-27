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

        const cartItems = this.props.cart.map(
            (cartItem, i) => {
                // debugger
                return (
                    <div 
                        className='cart-item-column-container'
                        key={i}>
                        <div className='cart-item-row-container'>
                            <div className='cart-item-row-container center' >
                                <div className='shop-icon'><FontAwesomeIcon icon={faStore}/></div>
                                <h3>Thank you for using Craftesy</h3>
                            </div>
                            <div className='center'>Link peronal page here</div>
                        </div>
                        <div className='cart-item-row-container'>
                            <div className='cart-item-row-container left'>
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
                                <div className='cart-item-row-container width-bump'>
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
                                    <div className='left'>
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
                            <button className='coupon center'>
                                <FontAwesomeIcon icon={faTag} className='flip center'/>
                                Apply shop coupon codes
                            </button>
                        </div>
                        <div className='cart-item-row-container'>
                            <textarea 
                                placeholder="Add a note to Craftesy (optional)">
                            </textarea>
                            <div className='cart-item-column-container'>
                                <p>Estimated delivery: Delivery-Date</p>
                                <p>where this is being delivered from</p>
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
                            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your 
                        </h2>
                        {cartItems}
                    </div>
                    <div className='cart-item-column-container money-stuff'>
                        <Link
                            className='text-link' 
                            to='/'>
                            <h3 className='column-right shopping'>Keep shopping</h3>
                        </Link>
                        <div className='payment-info'>
                            <div className='cart-item-column-container'>
                                <h3>How you'll pay</h3>
                                <label htmlFor="">
                                    <select name="" id="">
                                        <option value="">
                                            MasterCard, Visa, AmericanExpress, Discover
                                        </option>
                                        <option value="">
                                            PayPal
                                        </option>
                                        <option value="">
                                            Klarmna, 4 interest-free installments
                                        </option>
                                    </select>
                                </label>
                                <p>Pay in 4 installments of Math. Klarna. Learn Klarna</p>
                            </div>
                            <div className='cart-total'>
                                <div className='cart-total-items'>
                                    <h3>Item(s) total</h3>
                                    <div>Cart Total Price</div>
                                </div>
                                <div className='cart-total-items'>
                                    <h3>Shop discount</h3>
                                    <div>Accumulated Discounts</div>
                                </div>
                                <div className='cart-total-items'>
                                    <h4>Subtotal</h4>
                                    <div>Total Price after Discounts</div>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faShippingFast}/>
                                Get shipping cost
                            </div>
                            <button>Proceed to checkout</button>
                            <div> <FontAwesomeIcon icon={faTag}/> Apply Etsy coupon code </div>
                            <p>* additional duties and taxes _may apply_</p>
                        </div>
                        <div className='contact-me'>
                            <p> 
                                Thank you so much for taking the time to traverse my
                                Craftesy website demo. It was a pleasure to work on
                                and I hope that you liked what you saw enough to
                                contact me with any opportunities or inquieries you
                                might have.
                            </p>
                            <FontAwesomeIcon icon={faHandshake}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;