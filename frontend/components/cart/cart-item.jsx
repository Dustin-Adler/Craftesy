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
                giftMessage: false,
                coupon: false, 
                code: ''
            }
        }
    }

    handleQuantity(cartItem) {
        const options = [...Array(10)].map( (el, i) => {
            return <option key={i} value={i+1}>{i+1}</option>
        })

        return (
            <select 
                onChange={(e) => {
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
                className='item-quantity border-transition'>
                {options}
            </select>
        )
    }

    handleCheckbox(boxName) {
        let checkbox;
        switch (boxName) {
            case 'gift':
                checkbox = this.state.gift
                break;
            case 'giftMessage':
                checkbox = this.state.giftMessage
                break;
            case 'coupon':
                checkbox = this.state.coupon
                break;
            default:
                break;
        }
        
        if(!checkbox){
            this.setState({
                [boxName]: true
            })
        } else {
            this.setState({
                [boxName]: false
            })
        }
    }

    giftMessage() {
        if (!this.state.gift){
            return null
        }

        const textBox = this.state.giftMessage ? 
            <div className='giftMessage'>
                <textarea 
                    className='border-transition'
                    placeholder="Enter your message. 
                    Make sure to mention your 'to' and 'from' names">

                </textarea>
                <p
                    className='greyed-out'>
                    Use the space above to enter your gift message.
                </p>
            </div>
            :
            null

        return (
            <>
                <label>
                    <input
                        className='checkbox' 
                        type="checkbox"
                        defaultChecked={this.state.giftMessage}
                        onClick={ () => this.handleCheckbox("giftMessage")}/>
                Add a message for your gift?
                </label>
                {textBox}
            </>
        )
    }

    couponCode(){
        if(!this.state.coupon){
            return null
        }

        return (
            <div className='cart-item-row-container tbb-container jc-fe'>
                <input 
                    className='text-box-button tbb-text border-transition'
                    type="text"
                    placeholder='(hint) The name of this item!'
                    value={this.state.code}
                    onChange={(e) => this.setState({
                        code: e.target.value
                    })}/>
                <button
                    onClick={() => this.handleCode()}
                    className='text-box-button tbb-button'>
                    Apply
                </button>

            </div>
            
        )
    }

    handleCode() {

        const cartItem = this.props.cartItem

        if(this.state.code.toUpperCase() === cartItem.name.toUpperCase()
            && cartItem.discount >= 0.9){
            this.props.updateCartItem({
                discount: cartItem.discount -= .2, 
                id: cartItem.id
            })
        }
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
                    <div className='center'>Link personal page here</div>
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
                                    className='plainify-button'
                                    onClick={() => {
                                        this.props.deleteCartItem(cartItem.id)
                                    }}>
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
                                <h3>
                                    $ {(cartItem.price * cartItem.quantity * cartItem.discount).toFixed(2) } {/*total price of items after discount*/}
                                </h3>

                                {cartItem.quantity > 1 ? 
                                <p>
                                    ($ {(cartItem.price * cartItem.discount).toFixed(2)} each) {/* price per item after discount if quantity greater than 1 */}
                                </p>
                                : null}

                                {cartItem.discount < 1 ?
                                <p className='discount'>
                                    $ {(cartItem.price * cartItem.quantity * (1 - cartItem.discount)).toFixed(2) } saved! {/*amount saved if discount applied*/}
                                </p>
                                : null}
                            </div>
                        </div>
                        {cartItem.popularity > 0 ?
                            <div className='popularity'>
                                {cartItem.popularity} other {cartItem.popularity > 1  ? "people have" : "person has"} this in their cart
                            </div>
                        : null
                        }

                    </div>
                </div>
                <div className='cart-item-row-container'>
                    <div className='cart-item-column'>
                        <div className='cart-item-row-container start g-r'>
                            <input
                                className='checkbox' 
                                type="checkbox"
                                defaultChecked={this.state.gift}
                                onClick={ () => this.handleCheckbox("gift")}/>
                            <div className='cart-item-column-container'>
                                <h6>Would you like this as a gift?</h6>
                                <p className='greyed-out'>
                                    Prices aren't real this is a demo
                                </p>
                            </div>
                        </div>
                        {this.giftMessage()}
                    </div>
                    <div className='cart-item-column-container width'>
                        <button 
                            className='plainify-button shop-coupon'
                            onClick={()=>{this.handleCheckbox('coupon')}}>
                            <FontAwesomeIcon icon={faTag} className='coupon-tag'/>
                            Apply shop coupon codes
                        </button>
                        {this.couponCode()}
                    </div>
                </div>
                <div className='cart-item-row-container'>
                    <textarea 
                        className='border-transition'
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