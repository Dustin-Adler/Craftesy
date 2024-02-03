import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ProductSearchIndex from './product_search_index'

const mSTP = (state) => {
    const productsArr = Object.values(state.entities.products)
    return {
        products: productsArr
    }
}

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(ProductActions.getProducts())
})

export default connect(mSTP, mDTP)(ProductSearchIndex)