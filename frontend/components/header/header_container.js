import {openModal} from '../../actions/modal_actions'
import React from 'react'
import { connect } from 'react-redux'
import Header from './header'
import { logout } from '../../actions/session_actions'
import { searchByProductName } from '../../actions/product_actions'

const mSTP = (state) => ({
    currentUser: state.session.id,
    searchString: '',
    numberOfItemsInCart: Object.values(state.entities.cart).length
})

const mDTP = (dispatch) => ({
    openModal: (value) => dispatch(openModal(value)),
    logout: () => dispatch(logout()),
    searchByProductName: (searchString) => dispatch(searchByProductName(searchString))
})

export default connect(mSTP, mDTP)(Header);