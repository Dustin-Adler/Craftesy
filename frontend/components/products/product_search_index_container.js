import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ProductSearchIndex from './product_search_index'
import { createCartItem } from "../../actions/cart_actions"

const mSTP = (state) => {
    let productsArr = Object.values(state.entities.products)
    if (state.ui.search.productIds.length > 0) {
        const productIds = state.ui.search.productIds
        productsArr = productsArr.filter(product =>
            productIds.includes(product.id)
        )
    }

    return {
        products: productsArr
    }
}

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(ProductActions.getProducts()),
    createCartItem: (cart) => dispatch(createCartItem(cart))
})

export default connect(mSTP, mDTP)(ProductSearchIndex)