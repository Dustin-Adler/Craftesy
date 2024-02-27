import { connect} from "react-redux";
import { withRouter } from "react-router";
import * as reviewActions from '../../actions/review_actions'
import { openRevModal } from "../../actions/modal_actions";
import ProductReviews from "./product_reviews";

const mSTP = (state, ownProps) => ({
    reviews: Object.values(state.entities.reviews),
    session: state.session.id, 
    productId: ownProps.productId
})

const mDTP = (dispatch, ownProps) => ({
    getProductReviews: () => dispatch(reviewActions.getProductReviews(ownProps.productId)),
    openRevModal: (key) => dispatch(openRevModal(key))
})

export default withRouter(connect(mSTP, mDTP)(ProductReviews))