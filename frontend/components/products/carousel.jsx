import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
    }

    createProductsList(products) {
        const productListItems = []
        const colors = ['pink', 'green', 'orange', 'yellow', 'brown', 'blue']
        for (let i = 0; i < products.length; i++) {
            const color = colors[(i % colors.length)];
            const product = products[i];
            const listItem = 
                <li key={i} className="carousel-product-container" data-color={color}>
                    <Link to={`/products/${product.id}`} className="link">
                        <p className="carousel-name">{product.name}</p>
                        <div className="img-frame">
                            <img className="carousel-img" src={product.images[0].url} alt={product.name} />
                        </div>
                    </Link>
                </li>
            productListItems.push(listItem);
        }
        return productListItems;
    }

    render() {
        return(
            <div className="carousel-container">
                <ul className="track" data-direction={this.props.direction}>
                    {this.createProductsList(this.props.products)}
                </ul>
            </div>
        )

    }
}

const mSTP = (state, ownProps) => {
    return {
        products: ownProps.products,
        direction: ownProps.direction
    };
};

export default connect(mSTP)(Carousel);