import * as SessionAPIUtil from '../utils/session_api_util'

import { removeGuest } from './guest_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_CURRENT_GUEST = 'RECEIVE_CURRENT_GUEST'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ALL_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'



const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveCurrentGuest = currentGuest => ({
  type: RECEIVE_CURRENT_GUEST,
  currentGuest
})

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const login = user => dispatch => (
    SessionAPIUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      () => dispatch(removeGuest()),
      error => dispatch(receiveErrors(error.responseJSON))
    )
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser())
    )
)