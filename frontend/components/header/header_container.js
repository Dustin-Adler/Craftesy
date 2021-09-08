import {openModal} from '../../actions/modal_actions'
import React from 'react'
import { connect } from 'react-redux'
import Header from './header'

// const mSTP = (state) => {

// }

const mDTP = (dispatch) => ({
    openModal: (value) => dispatch(openModal(value)) 
})

export default connect(null, mDTP)(Header);