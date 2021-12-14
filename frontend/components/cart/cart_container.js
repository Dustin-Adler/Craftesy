import { connect } from 'react-redux'
import Cart from './cart'
import { 
    getCartItems, 
    deleteCartItem, 
    updateCartItem
} from '../../actions/cart_actions'

const mSTP = (state) => {
    // debugger
    return {
        cart: Object.values(state.entities.cart)
    }
}

const mDTP = (dispatch) => {

    return {
        updateCartItem: (item) => dispatch(updateCartItem(item)),
        getCartItems: () => dispatch(getCartItems()),
        deleteCartItem: (id) => dispatch(deleteCartItem(id))
    }
}

export default connect(mSTP, mDTP)(Cart)