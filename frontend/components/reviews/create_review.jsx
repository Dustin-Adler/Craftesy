import React from 'react'

class CreateReview extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            rating: 1, 
            body: ''
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){
        debugger
        return(
            <div className='create-review'>
                <form className='create-review-form' onSubmit={this.props.createReview()}>
                    <label onChange={this.handleChange('rating')} className='review-rating'>Rating
                        <input selected='true' type="radio" name='rating' value='1' />
                        <input type="radio" name='rating' value='1.5' />
                        <input type="radio" name='rating' value='2' />
                        <input type="radio" name='rating' value='2.5' />
                        <input type="radio" name='rating' value='3' />
                        <input type="radio" name='rating' value='3.5' />
                        <input type="radio" name='rating' value='4' />
                        <input type="radio" name='rating' value='4.5' />
                        <input type="radio" name='rating' value='5' />
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