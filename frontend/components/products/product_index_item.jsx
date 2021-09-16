import React from 'react'
// import CreateReviewContainer from '../reviews/create_review_container'
import CreateReview from '../reviews/create_review_form'

class ProductIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getProduct()
    }

    

    createReview(){
        if(this.props.session){
            return (
                <button 
                    onClick={() => this.props.openRevModal('CreateReview')}
                    className='create-review-button'>    
                    Create Review
                </button>
            )
        } else {
            return (
                <button
                    className="create-review-button"
                    onClick={() => this.props.openModal("login")}>
                    Sign in to review a product
                </button>
            )
        }
    }

    render(){
        if (this.props.product == undefined){
            return null
        } else {
            const product = this.props.product
            return(
                <div className='product-show'>
                    <div>
                        <img 
                            className='product-index-img' 
                            src={product.images[0].url} 
                            alt={product.name}/> <br />
                        {this.createReview()}
                    </div>
                    <div className='product-info'>
                        <div>placeholder for seller name</div>
                        <div>placeholder for sales and review info</div>
                        <p>{product.name}</p>
                        <div className='price-and-stock'>
                            <div className='product-price'>${product.price.toFixed(2)}</div>
                            <div className='in-stock?'>placeholder check: In Stock</div>
                        </div>
                        <form className='show-page-form'>
                            <label className='show-page-form-labels' htmlFor="">
                                <select className='show-page-select' name="" id="">

                                </select>
                            </label> <br />
                            <label className='show-page-form-labels' htmlFor="">
                                <select className='show-page-select' name="" id="">

                                </select>
                            </label>
                            <p>So sorry, but it looks like there's no way to customize this order as of right now. 
                                But you can write cool stuff here if you want!</p>
                            <textarea className='show-page-textarea'name="" id="">

                            </textarea>
                            <br />
                            <button>Add to cart</button>
                        </form>
                        <div className='do-people-want-this'>
                            <div>placeholder-cart-image</div>
                            <p>Some number of people might also want this thing</p>
                        </div>
                        <p>{product.description}</p>
                    </div>
                </div>
            )
        }
    }
}

export default ProductIndexItem;