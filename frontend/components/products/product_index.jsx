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
                    <img className='product-index-img' src={product.images[0].url} alt="" />
                    <div className='product-index-name'>{product.name}</div>
                </li>
            )
            
        return(
            <ul className='product-index'>
                {products}
            </ul>
        )
    }
}

export default ProductIndex;