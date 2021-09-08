import {connect} from 'react-redux';
import React from 'react';
import { registerAccount, getAccountFromEmail } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import SignInOrSignUp from './user_sign_up_or_in';

const mSTP = (state) => {
    return {
        user: {
            first_name: '',
            email: '',
            password: '',
        }
    };
};

const mDTP = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        registerAccount: (user) => dispatch(registerAccount(user)),
        getAccountFromEmail: (email) => dispatch(getAccountFromEmail(email))
    };
};

export default connect(mSTP, mDTP)(SignInOrSignUp)