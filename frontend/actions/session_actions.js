import * as SessionAPIUtil from '../utils/session_api_util'
import { receiveUser } from './user_actions'
import { receiveCartItems, removeCartItems } from './cart_actions'
import { removeGuest, receiveGuest } from './guest_actions'

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

const receiveCurrentGuest = currentGuest => ({
  type: RECEIVE_CURRENT_GUEST,
  currentGuest
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const login = user => dispatch => (
    SessionAPIUtil.login(user)
    .then(
      response => {
        dispatch(receiveCurrentUser(response.user))
        dispatch(receiveUser(response.user))
        dispatch(receiveCartItems(response.cart))
        dispatch(removeGuest())
      },
      error => dispatch(receiveErrors(error.responseJSON))
    )
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
    .then(
      response => {
        dispatch(logoutCurrentUser())
        dispatch(removeCartItems())
        dispatch(receiveGuest(response.guest))
        dispatch(receiveCurrentGuest(response.guest))
      }
    )
)