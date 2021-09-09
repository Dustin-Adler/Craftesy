import {connect} from 'react-redux';
import React from 'react';
import { registerAccount, getAccountFromEmail } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import SignInOrSignUp from './user_sign_up_or_in';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        user: {
            first_name: '',
            email: '',
            password: '',
            formNum: 0,
        },
        formType: 'Sign in to continue'
    };
};

const mDTP = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        registerAccount: (user) => dispatch(registerAccount(user)),
        getAccountFromEmail: (email) => dispatch(getAccountFromEmail(email)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SignInOrSignUp)