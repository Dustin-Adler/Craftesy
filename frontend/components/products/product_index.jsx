import React from 'react'

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getProducts()
    }

    render(){
        const products = this.props.products.map(
            product =>  
                <li key={product.name + product.id}>
                    <img className='product-index-img' src={product.images[0].url} alt={product.name}/>
                    <div className='price-container'>
                        <div className='product-index-price'>${product.price.toFixed(2)}</div>
                    </div>
                </li>
            )
            
        return(
            <div className='center-product-index'>
                <ul className='product-index'>
                    {products}
                </ul>
            </div>
        )
    }
}

export default ProductIndex;