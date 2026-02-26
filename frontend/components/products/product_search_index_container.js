import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ProductSearchIndex from './product_search_index'
import { createCartItem } from "../../actions/cart_actions"
import { searchByProductName } from "../../actions/product_actions";

const mSTP = (state) => {
    let productsArr = Object.values(state.entities.products)
    const productIds = state.ui.search.productIds
    productsArr = productsArr.filter(product =>
        productIds.includes(product?.id)
    )

    return {
        products: productsArr
    }
}

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(ProductActions.getProducts()),
    createCartItem: (cart) => dispatch(createCartItem(cart)),
    searchByProductName: (name) => dispatch(searchByProductName(name))
})

export default connect(mSTP, mDTP)(ProductSearchIndex)