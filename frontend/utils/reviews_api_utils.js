export const getProductReviews = (productId) => (
    $.ajax({
        url: `api/products/${productId}/reviews`,
        method: 'get'
    })
)

export const createProductReview = (productId, review) => (
    $.ajax({
        url: `api/products/${productId}/reviews`,
        method: 'post',
        data: {review}
    })
)

export const updateProductReview = (review) => (
    $.ajax({
        url: `api/reviews/${review.id}`,
        method: 'patch',
        data: {review}
    })
)

export const deleteReview = (id) => (
    $.ajax({
        url: `api/reviews/${id}`,
        method: 'delete'
    })
)