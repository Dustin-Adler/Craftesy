import {connect} from 'react-redux'
import React from 'react'
import { login } from '../../actions/session_actions'
import SignInOrSignUp from './user_sign_up_or_in';

const mSTP = (state) => {
    return {
        user: {
            email: '',
        },
        formType: 'Login'
    };
};

const mDTP = (dispatch) => {
    return {
        registerAccount: (user) => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(SignInOrSignUp)