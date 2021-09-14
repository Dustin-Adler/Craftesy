import { connect} from "react-redux";
import * as reviewActions from '../../actions/review_actions'
import ProductReviews from "./reviews";

const mSTP = (state) => {
    debugger
    return {
        reviews: state.entities.reviews
    }
}

const mDTP = (dispatch, ownProps) => {
    debugger
    return {
        getProductReviews: () => dispatch(reviewActions.getProductReviews(ownProps.match.params.id))
    }
}

export default connect(mSTP, mDTP)(ProductReviews)