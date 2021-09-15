import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ProductIndexItem from './product_index_item'
import {openModal, openRevModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {

    return {
        product: state.entities.products[ownProps.match.params.id],
        session: state.session.id
    }
}

const mDTP = (dispatch, ownProps) => {
  
    return {
        getProduct: () => dispatch(ProductActions.getProduct(ownProps.match.params.id)),
        openModal: (key) => dispatch(openModal(key)),
        openRevModal: (key) => dispatch(openRevModal(key)),
    }
} 

export default connect(mSTP, mDTP)(ProductIndexItem)