import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateReview from '../reviews/create_review_form'
import UpdateReviewForm from '../reviews/update_review_form'
import * as ReviewActions from '../../actions/review_actions'

function ReviewModal({ revModal, closeModal, productId, createReview, review }) {
  if (!revModal) {
    return null;
  }
  debugger
  let component;
  switch (revModal) {
    case 'CreateReview':
      component = <CreateReview
                      productId={productId}
                      createReview={createReview}
                      closeModal={closeModal} />;
      break;
    case 'UpdateReview':
      // debugger
      component = <UpdateReviewForm
                      productId={productId}
                      closeModal={closeModal}
                      review={review} />;
      break;
    default:
      return null;
  }
  return (
    <div className="review-form" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = (state, ownProps) => {
  // debugger
  return {
    revModal: state.ui.modal,
    productId: ownProps.match.params.id,
    review: state.entities.reviews[ownProps.match.params.reviewId]
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createReview: (prodId, state) => dispatch(ReviewActions.createProductReview(prodId, state)),
    updateReview: (review) => dispatch(ReviewActions.updateProductReview(review))
  };
};

export default connect(mSTP, mDTP)(ReviewModal);