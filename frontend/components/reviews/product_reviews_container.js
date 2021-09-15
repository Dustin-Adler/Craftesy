import { connect} from "react-redux";
import * as reviewActions from '../../actions/review_actions'
import ProductReviews from "./product_reviews";

const mSTP = (state) => ({
    reviews: Object.values(state.entities.reviews),
    session: state.session.id
})

const mDTP = (dispatch, ownProps) => ({
    getProductReviews: () => dispatch(reviewActions.getProductReviews(ownProps.match.params.id))
})

export default connect(mSTP, mDTP)(ProductReviews)