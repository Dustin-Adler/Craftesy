import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceDizzy, faFaceFlushed, faFaceGrin, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

class EmptyCart extends React.Component {
    render() {
        return (
            <div className="empty-cart-container">
              <div className="empty-cart-window">
                <h2>Uh oh, your cart is empty!</h2>
                <p>Let's see if we can't find something cool for you to look at.</p>
                <div className="empty-cart-links-container">
                    <Link to="/" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceGrinHearts} />
                        </div>
                    </Link>
                    <Link to="/" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceDizzy} />
                        </div>
                    </Link>
                    <Link to="/" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceFlushed} />
                        </div>
                    </Link>
                    <Link to="/" className="empty-cart-link">
                        <div className="icon-container">
                            <FontAwesomeIcon className="icon" icon={faFaceGrin} />
                        </div>
                    </Link>
                </div>
                <div className="empty-cart-done-shopping-button-container">
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