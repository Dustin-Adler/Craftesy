import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'

class ThankYou extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='thank-you-modal'>
                <h2 className='title'>Thank You!</h2>
                <p className='body'> 
                    Thank you so much for taking the time to traverse
                    Craftesy, my Etsy clone. It was a pleasure to work on,
                    and I hope that you liked what you saw enough to
                    contact me with any opportunities or inquieries you
                    might have using the links below.
                </p>
                <div className='buttons-container'>
                    <button 
                        onClick={() => this.props.closeModal()}>
                            Cancel & Keep Shopping!
                    </button>
                </div>
                <div className='links'>
                    <a 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        href="https://www.linkedin.com/in/dustin-adler-software-eng-web-dev/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        href="https://angel.co/u/dustin-adler">
                        <i className="fab fa-angellist"></i>
                    </a>
                    <a 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        href="https://github.com/Dustin-Adler">
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>
            </div>
        )
    }
}

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ThankYou);
