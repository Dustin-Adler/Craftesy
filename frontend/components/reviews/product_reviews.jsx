import React from 'react'
import { Link } from 'react-router-dom'
import ReviewModal from '../modal/review_modal'

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
                <button onClick={() => this.props.openRevModal('UpdateReview')}>
                    <Link to={`/products/${review.product_id}/reviews/${review.id}`}>
                        Update Review
                    </Link>
                </button>
            )
        } else {
            return null
        }
    }

    rating(rating) {
        const stars = [...Array(5)].map( (el, i) => {
            if(rating >= i+1){
                return (
                // <li key={i}>
                    <i aria-hidden="true" className="fas fa-star"></i>
                // </li>
                )
            } else {
                return (
                // <li key={i}>
                    <i aria-hidden="true" className="far fa-star"></i>
                // </li>
                )
            }
            
        })

        return stars
    }

    render(){

        const productReviews = this.props.reviews.map(
            (review, i) =>
                <li 
                    key = { review.id + i } 
                    className = 'review-rating-and-body'>
                    <div>
                        {/* <div>{review.author_id}</div> */}
                        {/* <div>placeholder for timestamp</div> */}
                    </div>
                    {this.rating(review.rating)}
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