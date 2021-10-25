import { connect } from 'react-redux'
import Cart from './cart'
import { 
    getCartItems, 
    deleteCartItem 
} from '../../actions/cart_actions'

const mSTP = (state) => {
    cart = state.entities.cart
}

const mDTP = (dispatch) => {
    getCartItems = () => dispatch(getCartItems()),
    deleteCartItem = (id) => dispatch(deleteCartItem(id))
}

export default connect(mSTP, mDTP)(Cart)