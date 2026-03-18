import { connect } from 'react-redux'
import EmptyCart from './empty_cart';
import { searchByProductName } from '../../actions/product_actions';
import { getImages } from '../../actions/image_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({ products: Object.values(state.entities.images) });

const mDTP = (dispatch) => {
    return {
        searchByProductName: (search_string) => dispatch(searchByProductName(search_string)),
        openModal: (modal) => dispatch(openModal(modal)),
        getImages: () => dispatch(getImages())
    }
}

export default connect(mSTP, mDTP)(EmptyCart);
