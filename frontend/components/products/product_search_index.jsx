import React from "react";
import ProductSearchItem from '../products/product_search_item'

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
                <ProductSearchItem 
                    key={i}
                    product={product}
                    createCartItem={this.props.createCartItem}
                    history={this.props.history}>
                </ProductSearchItem>
        )

        return (
            <>
                <div className='center-product-index'>
                    <ul className='product-search-index'>
                        {products}
                    </ul>
                </div>
            </>
        )
    }
}

export default ProductSearchIndex;