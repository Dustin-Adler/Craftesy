import React from 'react'

class ProductReviews extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getProductReviews()
    }

    render(){
        return (
            <div className='reviews-container'>
                OMG THIS IS THE BEST REVIEW EVER
            </div>
        )
    }
}

export default ProductReviews;