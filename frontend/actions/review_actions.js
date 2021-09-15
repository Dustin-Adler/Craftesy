import * as ReviewApiUtil from '../utils/reviews_api_utils';
export const RECIEVE_PRODUCT_REVIEWS = 'RECIEVE_PRODUCT_REVIEWS';
export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const recieveProductReviews = (reviews) => ({
    type: RECIEVE_PRODUCT_REVIEWS,
    reviews
})

const recieveReview = (review) => ({
    type: RECIEVE_REVIEW, 
    review
})

const removeReview = (id) => ({
    type: REMOVE_REVIEW, 
    id
})

export const getProductReviews = (productId) => (dispatch) => (
    ReviewApiUtil.getProductReviews(productId)
    .then(
        (reviews) => dispatch(recieveProductReviews(reviews))
    )
)

export const createProductReview = (productId, review) => (dispatch) => (
    ReviewApiUtil.createProductReview(productId, review)
    .then(
        (recReview) => dispatch(recieveReview(recReview))
    )
)

export const updateProductReview = (review) => dispatch => (
    ReviewApiUtil.updateProductReview(review)
    .then(
        recReview => dispatch(recieveReview(recReview))
    )
)

export const deleteReview = (id) => dispatch (
    ReviewApiUtil.deleteReview(id)
    .then(
        () => dispatch(removeReview(id))
    )
)