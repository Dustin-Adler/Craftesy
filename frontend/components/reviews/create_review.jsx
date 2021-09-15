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
            // debugger
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.props.product.id, this.state);
      }

    render(){
        // debugger
        return(
            <div className='create-review'>
                <form className='create-review-form' onSubmit={this.handleSubmit}>
                    <label  className='review-rating'>Rating
                        <div onChange={() => this.handleChange('rating')}>
                            <input onChange={() => this.handleChange('rating')} type="radio" name='rating' value={1} />
                            <input onChange={() => this.handleChange('rating')} type="radio" name='rating' value={2} />
                            <input onChange={() => this.handleChange('rating')} type="radio" name='rating' value={3} />
                            <input onChange={() => this.handleChange('rating')} type="radio" name='rating' value={4} />
                            <input onChange={() => this.handleChange('rating')} type="radio" name='rating' value={5} />
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