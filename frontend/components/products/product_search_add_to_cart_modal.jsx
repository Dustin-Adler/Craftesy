import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'

class ProductSearchAddToCartModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: this.props.display
        }
    }

    closeModal() {
        this.setState({
            display: false
        })
    }

    render() {
        if (!this.state.display) {
            return null
        }
        const product = this.props.product;
        return (
            <div className='add-to-cart-modal-container'>
                <span onClick={() => this.closeModal()} className="grey-screen"></span>
                <FontAwesomeIcon onClick={() => this.closeModal()} icon={faXmark} />
                <div className="confirm-added-to-cart-container">
                    <FontAwesomeIcon className="check" icon={faCircleCheck} />
                    <p className="confirm-text">1 Item added to cart</p>
                </div>
                <Link className="img-and-text-link">
                    <img className="modal-img"src={product.images[0]} alt={product.name} />
                    <p className="product-name">{product.name}</p>
                </Link>
                <div className="edit">
                    <p>None of the items on this website currently support any editing</p>
                </div>
                <div className="buttons-container">
                    <button className="find-more btn">
                        <p>Find more like this</p>
                        <FontAwesomeIcon className="arrow" icon={faArrowRight}/>
                    </button>
                    <button className="view-cart btn">
                        view cart & check out
                    </button>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        product: ownProps.product,
        display: ownProps.display
    };
};

export default connect(mSTP)(ProductSearchAddToCartModal);
