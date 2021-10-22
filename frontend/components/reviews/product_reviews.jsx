import React from 'react'
import { Link } from 'react-router-dom'
import ReviewModal from '../modal/review_modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ 
    faSkullCrossbones,
    faDiceD20,
    faDragon,
    faGamepad,
    faGhost, 
 } from '@fortawesome/free-solid-svg-icons'

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
                <button className="update-review-button" onClick={() => this.props.openRevModal('UpdateReview')}>
                    <Link 
                        className="rev-link"
                        to={`/products/${review.product_id}/reviews/${review.id}`}>
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
                    <i key={i} aria-hidden="true" className="fas fa-star"></i>
                )
            } else {
                return (
                    <i key={i} aria-hidden="true" className="far fa-star"></i>
                )
            }
            
        })

        return stars
    }

    reviewDate(date){
        const timeOfReview = new Date(date)
        const month = 
            new Intl.DateTimeFormat('en-US', { month: 'long'})
            .format(timeOfReview)
            .substring(0,3);
        const day = timeOfReview.getDate()
        const year = timeOfReview.getFullYear()
        return (`${month} ${day}, ${year}`)
    }

    randomUserIcon(){
        let icon = Math.floor(Math.random() * 5)
        switch (icon) {
            case 0:
                icon = (<FontAwesomeIcon icon={faSkullCrossbones} className='review-icon' />)
                break;
            case 1:
                icon = (<FontAwesomeIcon icon={faDragon} className='review-icon'/>)
                break;
            case 2:
                icon = (<FontAwesomeIcon icon={faDiceD20} className='review-icon'/>)
                break;
            case 3:
                icon = (<FontAwesomeIcon icon={faGamepad} className='review-icon'/>)
                break;
            case 4:
                icon = (<FontAwesomeIcon icon={faGhost} className='review-icon'/>)
                break;
            default:
                break;
        }

        const color = Math.floor(Math.random() * 5)
        switch (color) {
            case 0:
                return (<div className='user-icon blue-icon'>
                            {icon}
                        </div>)
                break;
            case 1:
                return (<div className='user-icon purple-icon'>
                            {icon}
                        </div>)
                break;
            case 2:
                return (<div className='user-icon red-icon'>
                            {icon}
                        </div>)
                break;
            case 3:
                return (<div className='user-icon green-icon'>
                            {icon}
                        </div>)
                break;
            case 4:
                return (<div className='user-icon grey-icon'>
                            {icon}
                        </div>)
                break;
            default:
                break;
        }
    }

    render(){
        const productReviews = this.props.reviews.map(
            (review, i) =>
                <li 
                    className='review-container'
                    key = { review.id + i } >
                        {this.randomUserIcon()}
                        <div className = 'review-rating-and-body'>
                            <div className='review-author-date'>
                                <div className='author'>{review.author}</div>
                                <div className="date">{this.reviewDate(review.created_at)}</div>
                            </div>
                            {this.rating(review.rating)}
                            <p>{review.body}</p>
                            {this.updateReview(review)}
                        </div>
                        {/* {this.reviewImage(review.image)} */}
                </li>,
        )
        let reviewAverage = 0
        this.props.reviews.forEach((review) => {
            reviewAverage += review.rating
        })
        reviewAverage = Math.floor(reviewAverage / this.props.reviews.length)
        return (
            <div className='reviews-container'>
                <div className='reviews-header'>
                    <h5>{this.props.reviews.length} reviews {this.rating(reviewAverage)}</h5>
                    <div>
                        <i className="fas fa-comment-dots"></i>
                        <p>Be one of the first to review this item!</p>
                    </div>
                    <h6>Reviews for this item</h6>
                </div>
                <ul className='list-container'>
                    {productReviews}
                </ul>
            </div>
        )
    }
}

export default ProductReviews;