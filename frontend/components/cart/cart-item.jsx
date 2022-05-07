import React from 'react'
import { connect } from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    faCaretDown,
    faStore, 
    faTag 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
    constructor(props) {
        super(props)

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
}

export default CartItem;
// const mSTP = (state) => {
    
// }

// const mDTP = (dispatch) => {

//     return {
//         getCartItems: () => dispatch(getCartItems()),
//         deleteCartItem: (id) => dispatch(deleteCartItem(id))
//     }
// }

// export default connect(mSTP, mDTP)(CartItem)