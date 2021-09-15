import React from 'react'
import { Redirect } from 'react-router'
import ReviewModal from '../modal/review_modal'

class ProductReviews extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.getProductReviews()
    }

    addReviewIdToState(review){
        return(
            // <div>
            //     <Redirect
            //         to={{
            //             pathname: `/products/${this.props.productId}`,
            //             state: { review: review }
            //         }}     
            //     />
            //     {this.props.openRevModal('UpdateReview')}
            //  </div>
            <div>
                <ReviewModal review={review}/>
                {this.props.openRevModal('UpdateReview')}
            </div>
            
            
        )
    }

    updateReview(review){
        if (review.author_id === this.props.session){
            return (
                <button onClick={() => this.addReviewIdToState(review)}>
                    Update Review
                </button>
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