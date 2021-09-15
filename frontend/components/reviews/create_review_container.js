import { connect } from "react-redux";
import CreateReview from './create_review'
import * as reviewActions from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.id]
})

const mDTP = (dispatch, ownProps) => ({
    createReview: () => dispatch(reviewActions.createProductReview(ownProps.match.params.id))
})

export default connect(mSTP, mDTP)(CreateReview);