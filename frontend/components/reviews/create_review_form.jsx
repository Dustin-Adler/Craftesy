import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from '@fortawesome/free-solid-svg-icons'

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
                {/* <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fas" 
                    data-icon="xmark" 
                    className="svg-inline--fa fa-xmark close-modal-button" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 320 512"
                    onClick={() => this.props.closeModal()}>
                        <path 
                            fill="currentColor" 
                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                        </path>
                </svg> */}
                <div
                    className='close-modal-button'
                    onClick={() => this.props.closeModal()}>
                    X
                </div>
            </div>
        )
    }
}

export default CreateReview;