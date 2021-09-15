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
        return(
            <div className='create-review'>
                <form className='create-review-form' onSubmit={this.handleSubmit}>
                    <label  className='review-rating'>Rating
                        <div onChange={this.handleChange('rating')}>
                            <input type="radio" name='rating' value={1} />
                            <input type="radio" name='rating' value={2} />
                            <input type="radio" name='rating' value={3} />
                            <input type="radio" name='rating' value={4} />
                            <input type="radio" name='rating' value={5} />
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