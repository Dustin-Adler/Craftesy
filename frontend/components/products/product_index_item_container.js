import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ProductIndexItem from './product_index_item'

const mSTP = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.id],
    }
}

const mDTP = (dispatch, ownProps) => {
    // debugger
    return {
        getProduct: () => dispatch(ProductActions.getProduct(ownProps.match.params.id))
    }
} 

export default connect(mSTP, mDTP)(ProductIndexItem)