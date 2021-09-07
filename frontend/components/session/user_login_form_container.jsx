import {connect} from 'react-redux'
import React from 'react'
import { login } from '../../actions/session_actions'
import userLoginForm from './user_login_form';

const mSTP = (state) => {
    return {
        user: {
            email: '',
            password: '',
        },
        formType: 'Login'
    };
};

const mDTP = (dispatch) => {
    return {
        registerAccount: (user) => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(userLoginForm)