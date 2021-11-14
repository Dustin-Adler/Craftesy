import React from 'react'
import { connect } from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    faCaretDown,
    faStore, 
    faTag 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as cartActions from '../../actions/cart_actions';

class CartItem extends React.Component {
    constructor(props) {
        super(props)

        if (this.props.cartItem){
            
            this.state = {
                quantity: this.props.cartItem.quantity, 
                gift: false, 
                coupon: false
            }
        }
        // debugger
    }

    handleQuantity(cartItem) {
        const options = [...Array(10)].map( (el, i) => {
            return <option key={i} value={i+1}>{i+1}</option>
        })

        // debugger
        return (
            <select 
                onChange={(e) => {
                    // debugger
                    this.props.updateCartItem({
                        quantity: e.target.value,
                        id: cartItem.id,
                    })
                    .then((res) => {
                        this.setState({
                            quantity: res.cartItem.quantity
                        })
                    })
                }}
                value={this.state.quantity} 
                className='item-quantity'>
                {options}
            </select>
        )
    }

    render(){
        if (!this.props.cartItem) {
            return (null)
        } 
        const currentDate = new Date().toDateString()
        const cartItem = this.props.cartItem
        return(
            <div 
                className='cart-item-column-container item-seperator'>

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
                                alt={cartItem.name}
                                />
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
                                {this.handleQuantity(cartItem)}
                                <FontAwesomeIcon 
                                    icon={faCaretDown} 
                                    className='fa-caret-down'/>
                            </div>
                            <div>
                                <h3>$ {(cartItem.price * this.state.quantity).toFixed(2) }</h3>
                                {this.state.quantity > 1 ? 
                                <p>($ {cartItem.price.toFixed(2)} each)</p>
                                : null}
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
}

const mDTP = (dispatch) => {

    return {
        updateCartItem: (cart) => dispatch(cartActions.updateCartItem(cart)),
        deleteCartItem: (id) => dispatch(cartActions.deleteCartItem(id))
    }
}

export default connect( null , mDTP)(CartItem)