import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import ScrollingProducts from "./scrolling_products"

const mSTP = (state) => {
    return {
        products: state.entities.products
    }
}

const mDTP = (dispatch) => ({
    
})

export default connect(mSTP, mDTP)(ScrollingProducts)