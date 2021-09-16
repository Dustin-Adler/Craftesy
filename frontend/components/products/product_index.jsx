import React from 'react'
import { Link } from 'react-router-dom'

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
                <li key={ product.name + (Math.floor(product.id * (Math.random()*100)))}>
                    <Link to={`/products/${product.id}`}>
                        <img 
                            className='product-index-img' 
                            src={product.images[0].url} 
                            alt={product.name}/>
                    </Link>
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