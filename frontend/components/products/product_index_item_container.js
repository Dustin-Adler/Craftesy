import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import * as ReviewActions from '../../actions/review_actions'
import ProductIndexItem from './product_index_item'
import {openModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
        session: state.session.id
    }
}

const mDTP = (dispatch, ownProps) => {
    // debugger
    return {
        getProduct: () => dispatch(ProductActions.getProduct(ownProps.match.params.id)),
        openModal: (value) => dispatch(openModal(value)),
        createReview: (prodId, state) => dispatch(ReviewActions.createProductReview(prodId, state))
    }
} 

export default connect(mSTP, mDTP)(ProductIndexItem)