import React from 'react'

class UpdateReview extends React.Component {
    constructor(props){
        super(props)
        debugger
        this.state = this.props.review
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
        this.props.updateReview(this.state)
        .then(() => this.props.closeModal())
      }

    render(){
        return(
            <div className='create-review'>
                <form className='create-review-form' onSubmit={this.handleSubmit}>
                    <label  className='review-rating'>Rating
                        <div onChange={this.handleChange('rating')}>
                            <input defaultChecked={this.state.radio === 1} type="radio" name='rating' value={1} />
                            <input defaultChecked={this.state.radio === 2} type="radio" name='rating' value={2} />
                            <input defaultChecked={this.state.radio === 3} type="radio" name='rating' value={3} />
                            <input defaultChecked={this.state.radio === 4} type="radio" name='rating' value={4} />
                            <input defaultChecked={this.state.radio === 5} type="radio" name='rating' value={5} />
                        </div>
                    </label>
                    <label>
                        <textarea 
                            onChange={this.handleChange('body')}
                            className='review-body'
                            placeholder="Your review here"
                            value={this.state.body}>
                        </textarea>
                    </label> <br />
                    <button className='review-button'>Update Review</button>
                </form>
                <button 
                    className='review-button'
                    onClick={()=> this.props.deleteReview(this.state.id)
                        .then(()=>this.props.closeModal())}>
                    Delete Review
                </button>
            </div>
        )
    }
}

export default UpdateReview;