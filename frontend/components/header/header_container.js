import {openModal} from '../../actions/modal_actions'
import React from 'react'
import { connect } from 'react-redux'
import Header from './header'
import { logout } from '../../actions/session_actions'

const mSTP = (state) => ({
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    openModal: (value) => dispatch(openModal(value)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Header);