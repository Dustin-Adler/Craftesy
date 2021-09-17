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
            debugger
            if(this.state.review < i+1){
                return (<>
                    <input className='review-star' type="radio" name='rating' value={i+1} id={`rating-${i+1}`}/>
                    <label htmlFor={`rating-${i+1}`}>
                        <i className="fas fa-star"></i>
                    </label>
                </>)
            } else {
                return (<>
                    <input className='review-star' type="radio" name='rating' value={i+1} id={`rating-${i+1}`}/>
                    <label htmlFor={`rating-${i+1}`}>
                        <i className="far fa-star"></i>
                    </label>
                </>)
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