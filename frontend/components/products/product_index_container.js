import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ProductIndex from './product_index'

const mSTP = (state) => ({
    products: Object.values(state.entities.products)
})

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(ProductActions.getProducts())
})

export default connect(mSTP, mDTP)(ProductIndex)