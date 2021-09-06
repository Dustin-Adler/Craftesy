import {connect} from 'react-redux'
import React from 'react'
import { registerAccount } from '../../actions/user_actions'
import userRegisterForm from './user_register_form'

const mSTP = (state) => {
    return {
        user: {
            firstName: '',
            email: '',
            password: '',
        },
        formType: 'Register new account'
    };
};

const mDTP = (dispatch) => {
    return {
        registerAccount: (user) => dispatch(registerAccount(user))
    };
};

export default connect(mSTP, mDTP)(userRegisterForm)