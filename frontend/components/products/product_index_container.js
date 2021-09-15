import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ProductIndex from './product_index'

const mSTP = (state) => {
    
    const allProducts = Object.values(state.entities.products)
    let productSelection = []
    if (allProducts.length){
        for (let i = 0; i < 10; i++) {
            const selected = Math.floor(Math.random() * allProducts.length)
            productSelection.push(allProducts[selected])
            allProducts.splice(selected, 1)
        }
    }
    
    return {
        products: productSelection,
    }
}

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(ProductActions.getProducts())
})

export default connect(mSTP, mDTP)(ProductIndex)