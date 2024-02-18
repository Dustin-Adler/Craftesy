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

        this.state = {
            shipping: false,
            coupon: false,
            code: '',
        }
    }

    componentDidMount() {
        this.props.getCartItems();
    }

    shippingModal(){
        if(!this.state.shipping){
            return null
        }

        return (
        <div className='modal-background'>
            <div className='shippingModal cart-item-column-container'>
                <h2>All items are digital! No Shipping!</h2>
                <label 
                    className="shipping-modal-label">
                        What do you think about that? 
                        <br />
                    <select
                        className='item-quantity border-transition'>
                        <option value="">Hip Hip, Hooray!</option>
                        <option value="">Wow, really!</option>
                        <option value="">Awesome!</option>
                        <option value="">Boo! I love to pay for shipping.</option>
                    </select>
                </label>

                <label 
                    className="shipping-modal-label ">
                        Zip / Postal Code 
                        <br />
                    <input 
                        className='border-transition'
                        type="text"
                        placeholder="No Zip / Postal code needed" />
                </label>
                <div
                    className="cart-item-row-container">
                    <button
                        className='plainify-button'
                        onClick={()=>this.setState({shipping: false})}>
                            Cancel
                    </button>
                    <button
                        className='checkout-button'
                        onClick={()=>this.setState({shipping: false})}>
                            Update
                    </button>
                </div>
            </div>
        </div>
        
        )
    }

    handleCodeModal() {
        
        if(!this.state.coupon){
            this.setState({
                coupon: true
            })
        } else {
            this.setState({
                coupon: false
            })
        }
    }

    handleCoupon(){
        if(!this.state.coupon){
            return null
        }

        return(
            <div className='cart-item-row-container tbb-container jc-fe'>
                <input 
                    className='text-box-button tbb-text border-transition'
                    type="text"
                    placeholder='(hint) The name website!'
                    value={this.state.code}
                    onChange={(e) => this.setState({
                        code: e.target.value
                    })}/>
                <button
                    onClick={() => this.handleCode(this.state.code)}
                    className='text-box-button tbb-button'>
                    Apply
                </button>

            </div>
        )
    }

    handleCode(code){
        if (code.toUpperCase() === 'CRAFTESY'){
            this.props.cart.forEach((item) => {
                if (item.discount <= 0.75){
                    return item
                } else {
                    item.discount -= .1
                    this.props.updateCartItem(item)
                }
            })
            
        } 
    }

    render() {
        if (!this.props.cart) {
            return (null)
        } 
        const cartItems = this.props.cart.map(
            (cartItem, i) => {
                return (
                    <CartItem 
                        key={i}
                        cartItem={cartItem}/>
                )
            }
        )

        let totalPrice = 0, totalDiscount = 0, subtotal = 0
        this.props.cart.forEach((item) => {
            totalPrice += (item.price * item.quantity), 
            totalDiscount += (item.price * item.quantity) * (1 - item.discount),
            subtotal += (item.price * item.quantity) * item.discount
        })

        return (
            <div className='cart-container'>
                {this.shippingModal()}
                <div className='cart'>
                    <div className='cart-items'>
                        <h2 
                            className='item-count-header'>
                            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
                        </h2>
                        {cartItems}
                    </div>
                    <div className='cart-item-column-container money-stuff'>
                        <div className='cart-item-row-container keep-shopping'>
                            <span></span>
                            <button className='plainify-button'>
                                <Link
                                    className='plainify-link' 
                                    to='/'>
                                    <h3 className='shopping'>Keep shopping</h3>
                                </Link>
                            </button>
                        </div>

                        <div className='payment-info'>
                            <div className='cart-item-column-container'>
                                <h3 className='payment-spacing'>How you'll pay</h3>
                                <label htmlFor="">
                                    <div className='radio-buttons'>
                                        <div className='cart-item-row-container start center'>
                                            <input type="radio" name="payment-option" defaultChecked />
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
                                    <div>$ {totalPrice.toFixed(2)}</div>
                                </div>
                                <div className='cart-item-row-container payment-spacing divider'>
                                    <h3>Shop discount</h3>
                                    <div>-$ {totalDiscount.toFixed(2)}</div>
                                </div>
                                <div className='cart-item-row-container sub-total'>
                                    <div>Subtotal</div>
                                    <div>$ {subtotal.toFixed(2)}</div>
                                </div>
                            </div>
                            <button 
                                className='cart-item-row-container start shipping'
                                onClick={ () => this.setState({shipping: true})}> {/*open modal for shipping information */}
                                <FontAwesomeIcon icon={faShippingFast}/>
                                <p className='mg-l width'>Get shipping cost</p>
                            </button>
                            <button 
                                className="checkout-button"
                                onClick={() => this.props.openModal('thank-you')}>
                                    Proceed to checkout
                            </button>
                            <button
                                onClick={() => {this.handleCodeModal()}} 
                                className='
                                    plainify-button
                                    cart-item-row-container
                                    craftesy-coupon-container 
                                    center'>
                                <div className='coupon-icon-bg'>
                                    <FontAwesomeIcon 
                                        icon={faTag} 
                                        className='coupon-icon'/>
                                </div>
                                <p className='width'>Apply Craftesy coupon code</p>
                            </button>
                            {this.handleCoupon()}
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