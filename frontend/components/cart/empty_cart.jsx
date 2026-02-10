import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceDizzy, faFaceFlushed, faFaceGrin, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

class EmptyCart extends React.Component {
    constructor(props){
        super(props)

    }

    // generateSearchLinks() {
    //   this.props.producst.length > 
    // }

    render() {
        return (
            <div className="empty-cart-container">
              <div className="empty-cart-window">
                <h2>Uh oh, your cart is empty!</h2>
                <p>Let's see if we can't find something cool for you to look at.</p>
                <div className="display-grid-justify-center back-to-shop-link-container">
                  <Link to="/" className=" back-to-shop-link">
                    Take me back to Craftesy!
                  </Link>
                </div>
                <div className="empty-cart-links-container">
                    <Link to="/products/search" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceGrinHearts} />
                        </div>
                        {/* <img className="product-img"
                            src={this.props.products[0].images[0].url}
                            alt={"product image"}/> */}
                    </Link>
                    <Link to="/products/search" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceDizzy} />
                        </div>
                    </Link>
                    <Link to="/products/search" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceFlushed} />
                        </div>
                    </Link>
                    <Link to="/products/search" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceGrin} />
                        </div>
                    </Link>
                </div>
                <div className="display-grid-justify-center">
                    <button
                      onClick={() => this.props.openModal("thank-you")}
                      className="empty-cart-done-shopping-button">
                        Done Exploring Craftesy?
                    </button>
                </div>
              </div>
            </div>
        )
    }
}

export default EmptyCart;