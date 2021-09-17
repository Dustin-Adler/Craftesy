import React from 'react'

class CreateReview extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            rating: 1, 
            body: ''
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.props.productId, this.state)
        .then(() => this.props.closeModal())
      }

    render(){
        const review = [...Array(5)].map( (el, i) => {
            if(this.state.rating >= i+1){
                return (
                <li key={i}>
                    <input className='review-star' type="radio" name='rating' value={i+1} id={`rating-${i+1}`}/>
                    <label htmlFor={`rating-${i+1}`}>
                        <i aria-hidden="true" className="fas fa-star"></i>
                    </label>
                </li>)
            } else {
                return (
                <li key={i}>
                    <input className='review-star' type="radio" name='rating' value={i+1} id={`rating-${i+1}`}/>
                    <label htmlFor={`rating-${i+1}`}>
                        <i aria-hidden="true" className="far fa-star"></i>
                    </label>
                </li>)
            }
            
        })
        
            return(
            <div className='create-review'>
                <form className='create-review-form' onSubmit={this.handleSubmit}>
                    <label  className='review-rating'>Rating
                        <div onChange={this.handleChange('rating')}>
                            {review}
                        </div>
                    </label>
                    <label>
                        <textarea 
                            onChange={this.handleChange('body')}
                            className='review-body'
                            placeholder="Your review here"></textarea>
                    </label>
                    <button className='review-button'>Create Review</button>
                </form>
            </div>
        )
    }
}

export default CreateReview;