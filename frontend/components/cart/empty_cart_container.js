import connect from 'react-redux';
import EmptyCart from './empty_cart';

const mSTP = (state) => {
    return {
        // No state needed for empty cart
    }
}

const mDTP = (dispatch) => {
    return {
        // search suggestions or other actions
    }
}

export default connect(mSTP, mDTP)(EmptyCart);