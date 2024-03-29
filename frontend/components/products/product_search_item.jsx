import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faStar, faCircle, faPlus, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import ProductSearchAddToCartModal from "./product_search_add_to_cart_modal";

class ProductSearchItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmationModal: false
        }
        this.getStateOfConfirmationModal = this.getStateOfConfirmationModal.bind(this)
    }

    getStateOfConfirmationModal(activeModal) {
        this.setState({confirmationModal: activeModal})
    }

    cartConfirmationModal() {
        const modal = this.state.confirmationModal ? 
            <ProductSearchAddToCartModal
                modalState={this.getStateOfConfirmationModal}
                display={this.state.confirmationModal}
                product={this.props.product}
                history={this.props.history}/>
            : null
        return modal
    }

    addItemToCart() {
        this.props.createCartItem({
            product_id: this.props.product.id,
            quantity: 1
        })
        .then(() => this.setState({confirmationModal: true}))
    }

    render() {
        const product = this.props.product
        const averageRating = product.average_rating ?
            product.average_rating : "No reviews"
        return(
            <li className='product-search-item-container'>
                {this.cartConfirmationModal()}
                <div className='product-search-details-container'>
                    <div className='img-container'>
                        <Link
                            className='link'
                            to={`/products/${product.id}`}>
                            <img
                                className='img'
                                src={product.images[0].url}
                                alt={product.name}/>
                        </Link>
                    </div>
                    <h3 className='title'>{product.name}</h3>
                    <div className='search-reviews-container'>
                        <div className='star-rating-container'>
                            <p className='average-rating'>{averageRating}</p>
                            <FontAwesomeIcon className='review-star' icon={faStar} />
                            {/* todo: if navigating in any way other than search
                            loses the average rating and review count */}
                            <p className='number-of-reviews'>({product.review_count})</p>
                        </div>
                        <FontAwesomeIcon className='dot' icon={faCircle}/>
                        <div className='star-seller-name-container'>
                            <div className='seller-star-container'>
                                <FontAwesomeIcon 
                                    className='seller-star-certificate-background'
                                    icon={faCertificate}/>
                                <FontAwesomeIcon 
                                    className='seller-star-inner-star'
                                    icon={faStar}/>
                            </div>
                            <p className='seller-shop-name'>SuperTotallyAwesomeSeller</p>
                        </div>
                    </div>
                    <div className='price-container'>
                        <p className='price'>${product.price.toFixed(2)}</p>
                        {/* todo: shop discount information required for discount info */}
                        {/* <p className='discount'>discount info</p> */}
                    </div>
                    <div className='promotion-container'>
                        <div className='promo-info'>
                            <p className='shipping'>Free shipping!</p>
                        </div>
                        <div className='promo-info'>
                            {/* todo: shop information required for stock information */}
                            {/* <p className='stock'>x items left</p> */}
                        </div>
                    </div>
                </div>
                <div className='cart-search-container'>
                    <div 
                        className='add-to-cart'
                        onClick={() => this.addItemToCart()}>
                            <FontAwesomeIcon className='plus-icon' icon={faPlus}/>
                            <p className='search-item-add-to-cart'>Add to Cart</p>
                    </div>
                    {/* todo: search based on a selected item */}
                    <div className='more-like-this-container'>
                        <div className='more-text'>More like this</div>
                        <FontAwesomeIcon className='more-arrow' icon={faArrowRight}/>
                    </div>
                </div>
            </li>
        )
    };

};

const mSTP = (state, ownProps) => ({
    product: ownProps.product,
    history: ownProps.history
});

const mDTP = (dispatch) => ({
    getProduct: (product_id) => dispatch(getProduct(product_id))
})


export default connect(mSTP, mDTP)(ProductSearchItem);