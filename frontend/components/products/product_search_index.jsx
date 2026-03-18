import React from "react";
import ProductSearchItem from '../products/product_search_item'
import EmptyCartContainer from '../cart/empty_cart_container'

class ProductSearchIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.products.length && !this.props.allProducts.length) {
            this.getSearchedProductsFromURL()
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.getSearchedProductsFromURL()
        }
    }

    getSearchedProductsFromURL() {
        const searchParams = new URLSearchParams(this.props.location.search)
        let query = searchParams.get('q')
        if (query === null) query = ''
        this.props.searchByProductName(query)
    }

    render() {
        const anyProducts = this.props.products.length
        if (!anyProducts){
            return (
                <EmptyCartContainer
                    history={this.props.history}/>
            )
        }

        const products = this.props.products.map(
            (product, i) =>
                <ProductSearchItem 
                    key={`${product.name}-${i}`}
                    product={product}
                    createCartItem={this.props.createCartItem}
                    history={this.props.history}
                    searchByProductName={this.props.searchByProductName}/>
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