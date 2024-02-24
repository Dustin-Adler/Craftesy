import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircleCheck, faArrowRight, faCircle }
    from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { searchByProductName } from "../../actions/product_actions"

class ProductSearchAddToCartModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: this.props.display,
        }
    }

    closeModal() {
        this.setState({display: false})
        this.props.modalState(false)
    }

    moreLikeThis(game_name) {
        this.props.searchByProductName(game_name)
            .then(
                this.closeModal()
            )
    }

    render() {
        if (!this.state.display) {
            return null
        }
        const product = this.props.product;
        const quantity = this.props.quantity ? this.props.quantity : 1;
        return (
            <div className='add-to-cart-modal-container'>
                <span onClick={() => this.closeModal()} className="grey-screen"></span>
                <div className="close-container" onClick={() => this.closeModal()}>
                    <FontAwesomeIcon className="close" icon={faXmark} />
                    <span className="background"></span>
                </div>
                <div className="product-cart-info-container">
                    <div className="confirm-added-to-cart-container">
                        <FontAwesomeIcon className="check" icon={faCircleCheck} />
                        <p>{quantity} {quantity === 1 ? "Item" : "Items"} added to cart</p>
                    </div>
                    <Link className="img-link" to={`/products/${product.id}`}>
                        <img className="modal-img"src={product.images[0].url} alt={product.name} />
                    </Link>
                    <Link className="text-link" to={`/products/${product.id}`}>
                        <span className="product-name">{product.name}</span>
                    </Link>
                    <p className="price">${product.price.toFixed(2)}</p>
                    <div className="edit">
                        <p>Edit the following variations from your cart</p>
                        <ul>
                            <li>
                                <FontAwesomeIcon className="li-dot" icon={faCircle}/>
                                Quantity
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="buttons-container">
                    <button 
                        onClick={() => this.moreLikeThis(product.game_name)}
                        className="find-more btn">
                            <p>Find more like this</p>
                            <FontAwesomeIcon className="arrow" icon={faArrowRight}/>
                    </button>
                    <Link className="cart-link" to="/cart">
                        <button className="view-cart btn">
                            view cart & check out
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    product: ownProps.product,
    display: ownProps.display
});

const mDTP = (dispatch) => ({
    searchByProductName: (searchString) => dispatch(searchByProductName(searchString))
})

export default connect(mSTP, mDTP)(ProductSearchAddToCartModal);
