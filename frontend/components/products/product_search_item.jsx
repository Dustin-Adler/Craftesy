import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ProductSearchItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_id: this.props.product.id,
            quantity: 1
        }
    }

    render() {
        const product = this.props.product
        const averageRating = product.average_rating ?
            product.average_rating : "Be the first to review this item!"
        return(
            <li className='product-search-item-container'>
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
                        <img 
                            className='review-star'
                            src=""
                            alt=""/>
                        {/* todo: if navigating in any way other than search
                        loses the average rating and review count */}
                        <p className='number-of-reviews'>({product.review_count})</p>
                    </div>
                    <img
                        className='dot'
                        src="" 
                        alt="" />
                    <div className='star-seller-name-container'>
                        <img 
                            className='seller-star'
                            src=""
                            alt="" />
                        <p className='seller-shop-name'>SuperTotallyAwesomeSeller</p>
                    </div>
                </div>
                <div className='price-container'>
                    <p className='price'>$ {product.price}.00</p>
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
                <div className='cart-search-container'>
                    <span 
                        className='add-to-cart'
                        onClick={() => this.props.createCartItem(this.state)}>
                            cart button
                    </span>
                    {/* todo: search based on a selected item */}
                    <span className='more-like-this'>link to search</span>
                </div>
            </li>
        )
    };

};

const mSTP = (state, ownProps) => {
    return {
        product: ownProps.product
    };
};

export default connect(mSTP)(ProductSearchItem);