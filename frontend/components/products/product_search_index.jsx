import React from "react";
import { Link } from 'react-router-dom'

class ProductSearchIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const anyProducts = this.props.products.length
        if (!anyProducts){
            return (
                <div className="empty-search-results-banner">
                    Sorry, but nothing seems to match your search results
                </div>
            )
        }

        const products = this.props.products.map(
            (product, i) =>  
                <li key={i}>
                    <Link to={`/products/${product.id}`}>
                        <img 
                            className='product-index-img' 
                            src={product.images[0].url} 
                            alt={product.name}/>
                    </Link>
                        <div className='price-container'>
                            <div className='product-index-price'>$ {product.price.toFixed(2)}</div>
                        </div>
                </li>
        )
        return (
            <div className='center-product-index'>
                <ul className='product-index'>
                    {products}
                </ul>
            </div>
        )
    }
}

export default ProductSearchIndex;