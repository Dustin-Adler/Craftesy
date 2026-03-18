import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceDizzy, faFaceFlushed, faFaceGrin, faFaceGrinHearts, faFaceAngry, faFaceGrinBeam, faFaceGrinTongueWink, faFaceGrinWide } from '@fortawesome/free-solid-svg-icons';

class EmptyCart extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {    
      if (this.props.products.length < 4) {
        this.props.getImages();
      }
    }

    getRandomIdx(arr) {
      return Math.floor(Math.random() * arr.length)
    }

    createProductCoins() {
      let productFromEachGame = this.props.products
      let productCoins = [];
      let icons = [faFaceDizzy, faFaceFlushed, faFaceGrin, faFaceGrinHearts, faFaceAngry, faFaceGrinBeam, faFaceGrinTongueWink, faFaceGrinWide]
      let iconContainerColor = ["rgb(253, 55, 55)", "rgb(255, 187,61)", "yellow", "lime", "cyan", "fuchsia"]
      for (let i = 0; i < 4; i++) {
        const productIndex = this.getRandomIdx(productFromEachGame);
        const iconIndex = this.getRandomIdx(icons);
        const colorIndex = this.getRandomIdx(iconContainerColor);
        const selectedIcon = icons.splice(iconIndex, 1)[0]
        const selectedProduct = productFromEachGame.splice(productIndex, 1)[0]
        const selectedColor = iconContainerColor.splice(colorIndex, 1)[0]
        productCoins.push(
          <Link
            onClick={() => this.props.searchByProductName(selectedProduct.game_name)}
            key={`product-coin-${selectedProduct?.id}`}
            to={`/products/search?q=${selectedProduct.game_name}`}
            className="empty-cart-link coin-container">
              <div className="coin">
                <div className="icon-container" style={{backgroundColor: selectedColor}}>
                  <FontAwesomeIcon className="icon" icon={selectedIcon} />
                </div>
                <img className="coin-product-img"
                    src={selectedProduct.images[0].url}
                    alt={selectedProduct.game_name}/>
              </div>
          </Link>
        )
      }

      return productCoins;
    }

    emptyCartOrSearchResults() {
      if (this.props.history.location.pathname === "/cart") {
        return (
          <h2> Uh oh, your cart is empty! </h2>
        )
      } else {
        return (
          <h2> Sorry, but nothing seems to match your search results. </h2>
        )
      }
    }

    render() {
      if (this.props.products.length < 4) return null
      const productCoins = this.createProductCoins();
      const searchOrCart = this.emptyCartOrSearchResults();
      return (
          <div className="empty-cart-container">
            <div className="empty-cart-window">
              {searchOrCart}
              <p>Let's see if we can't find something cool for you to look at.</p>
              <div className="display-grid-justify-center back-to-shop-link-container">
                <Link to="/" className=" back-to-shop-link">
                  Take me back to Craftesy!
                </Link>
              </div>
              <div className="empty-cart-links-container">
                {productCoins}
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