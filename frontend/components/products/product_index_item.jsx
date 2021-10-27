import React from 'react'
// import CreateReviewContainer from '../reviews/create_review_container'
import CreateReview from '../reviews/create_review_form'
import ProductReview from '../reviews/product_reviews_container';

class ProductIndexItem extends React.Component {
    constructor(props){
        super(props)

        this.state= {
            description: false,
        }
    }

    componentDidMount(){
        this.props.getProduct()
    }

    descriptionClick(){
        if(this.state.description){
            return this.setState({description: false})
        } else {
            return this.setState({description: true})
        }
    }

    displayDescription(){
        return(
            <div className={this.state.description ? 'product-show-additional-info-active' : 'product-show-additional-info-inactive'}>
                <p>{this.props.product.description}</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        )
    }

    createReview(){
        if(this.props.session){
            return (
                <div className='size-review-button'>
                    <button 
                        onClick={() => this.props.openRevModal('CreateReview')}
                        className='add-to-cart-button'>    
                        Create Review
                    </button>
                </div>
            )
        } else {
            return (
                <div className='size-review-button'>
                    <button
                        className="add-to-cart-button"
                        onClick={() => this.props.openModal("login")}>
                        Sign in to review a product
                    </button>
                </div>
            )
        }
    }

    render() {
        if (this.props.product == undefined){
            return null
        } else {
            const product = this.props.product
            const review = [...Array(5)].map( (el, i) => <i key={i} className="fas fa-star"></i>) // actual review calc coming soon
            return(
                <div className='product-show'>
                    <div className='img-review'>
                        <div className='img-create-review-button' >
                            <img 
                                className='product-index-item-img' 
                                src={product.images[0].url} 
                                alt={product.name}/> <br />
                            {this.createReview()}
                        </div>
                        < ProductReview />
                    </div>
                    <div className='product-info'>
                        <div className='product-show-seller-shop-name'>Super Totally Awesome Seller</div>
                        <div className='product-show-sales-info'>
                            {Math.floor(Math.random()*10000)} sales
                            <div className='opaque-grey-vertical-border'>|</div>
                            <div className='review-stars'>
                                {review}
                            </div>
                        </div>
                        <h2 className='product-name-show'>{product.name}</h2>
                        <div className='price-and-stock'>
                            <div className='product-price'>$ {product.price.toFixed(2)}</div>
                            <div>Pay in 4 installments of $ {(product.price/ 4).toFixed(2)}</div>
                        </div>
                        <form className='show-page-form'>
                            <label className='show-page-form-labels'> Make your item unique?
                                <select className='show-page-select'>
                                    <option defaultValue>
                                        There are no additional options
                                    </option>
                                </select>
                            </label>
                            <button 
                                className='add-to-cart-button'
                                onClick={() => this.props.createCartItem(
                                    {product_id: product.id}
                                    )}>
                                Add to cart
                            </button>
                        </form>
                        <button 
                            className='product-show-additional-info-button'
                            onClick={()=>this.descriptionClick()}>
                            <div>Description</div>
                            <i className="fas fa-caret-down"></i>
                        </button>
                        {this.displayDescription()}
                    </div>
                </div>
            )
        }
    }
}

export default ProductIndexItem;