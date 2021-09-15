import React from 'react'
import UpdateReview from './update_product_review_form'

class ProductReviews extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getProductReviews()
    }

    updateReview(review){
        if (review.author_id === this.props.session){
            return (
                // <UpdateReview 
                    // rating={review.rating} 
                    // body={review.body}
                    // updateReview=(this.props.updateReview) />
                <button>Update Review</button>
            )
        } else {
            return null
        }
    }

    render(){
        const productReviews = this.props.reviews.map(
            review =>
                <li key={review.body+review.id}className='review-rating-and-body'>
                    <div>
                        {/* <div>{review.author_id}</div> */}
                        {/* <div>placeholder for timestamp</div> */}
                    </div>
                    {/* <div>{review.rating}</div> */}
                    <p>{review.body}</p>
                    {/* <img className='review-image' src="" alt="Reviewer's Photo" /> */}
                    {/* <div>placeholder for helpful button</div> */}
                    {this.updateReview(review)}
                </li>
        )
        return (
            <div className='reviews-container'>
                <ul className='list-container'>
                    {productReviews}
                </ul>
            </div>
        )
    }
}

export default ProductReviews;