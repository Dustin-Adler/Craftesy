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
                    might have.
                </p>
                <div className='buttons'>
                    <button 
                        onClick={() => this.props.closeModal()}>
                            close modal/keep shopping
                    </button>
                    <button>clear cart and move to start</button>
                </div>
                <div className='links'>
                    <div>LinkedIn</div>
                    <div>GitHub</div>
                    <div>AngelsList</div>
                    <div>Personal Website</div>
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