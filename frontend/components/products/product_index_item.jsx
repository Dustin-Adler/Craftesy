import React from 'react'
import ProductReview from '../reviews/product_reviews_container';
import ProductSearchAddToCartModal from './product_search_add_to_cart_modal'

class ProductIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            quantity: 1,
            description: false,
            dispConfModal: false
        }
        this.toggleConfModal = this.toggleConfModal.bind(this)
    }

    componentDidMount() {
        this.props.getProduct()
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.product) {
            return null
        } else if(prevProps.product.id != this.props.product.id) {
            this.toggleConfModal();
        }
    }

    descriptionClick() {
        this.state.description ? this.setState({description: false}) : this.setState({description: true})
    }

    displayDescription() {
        return(
            <div className={this.state.description ? 'product-show-additional-info-active' : 'product-show-additional-info-inactive'}>
                <p>{this.props.product.description}</p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        )
    }

    createReview() {
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

    confirmationModal() {
        return this.state.dispConfModal ? 
            <ProductSearchAddToCartModal
                display={this.state.dispConfModal}
                modalState={this.toggleConfModal}
                quantity={this.state.quantity}
                product={this.props.product}
                history={this.props.history}/>
            : null
    }

    toggleConfModal(kingBoo) {
        this.setState({dispConfModal: kingBoo})
    }

    addToCart() {
        this.props.createCartItem({
            product_id: this.props.product.id,
            quantity: this.state.quantity
        })
        .then(
           () => this.toggleConfModal(true)
        )
    }

    render() {
        if (!this.props.product){
            return null
        } else {
            const product = this.props.product
            const quantityOptions = [...Array(10)].map( 
                (el, i) => i === 0 ? 
                <option key={i} value={i+1} defaultValue> {i+1} </option>
                :
                <option key={i} value={i+1}> {i+1} </option>)
            const review = [...Array(5)].map( (el, i) => <i key={i} className="fas fa-star"></i>) // actual review calc coming soon
            return(
                <div className='product-show'>
                    {this.confirmationModal()}
                    <div className='img-review'>
                        <div className='img-create-review-button' >
                            <img 
                                className='product-index-item-img' 
                                src={product.images[0].url} 
                                alt={product.name}/> <br />
                            {this.createReview()}
                        </div>
                        <ProductReview productId={product.id}/>
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
                            <label className='show-page-form-labels'> Quantity
                                <select 
                                    className='show-page-select'
                                    onChange={(e) => {
                                        this.setState({
                                            quantity: e.target.value
                                        })
                                    }}>
                                    {quantityOptions}
                                </select>
                            </label>
                            <button 
                                className='add-to-cart-button'
                                onClick={() => this.addToCart()}>
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