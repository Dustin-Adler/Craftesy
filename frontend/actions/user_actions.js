import * as UsersAPIUtil from '../utils/users_api_util'
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL'
export const RECEIVE_ALL_ERRORS = 'RECEIVE_ALL_ERRORS'

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
  })

const removeUser = id => ({
    type: REMOVE_USER, 
    id
})

const receiveEmail = (user) => {
    return {
      type: RECEIVE_EMAIL,
      user
    }
  }

const receiveErrors = errors => ({
  type: RECEIVE_ALL_ERRORS,
  errors
})

export const getAccountFromEmail = (email) => dispatch => (
    UsersAPIUtil.getAccountFromEmail(email)
    .then(
      userEmail => dispatch(receiveEmail(userEmail))
    )
)

export const registerAccount = user => dispatch => (
    UsersAPIUtil.registerAccount(user)
    .then(
      user => dispatch(receiveUser(user)),
      user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON))
    )
 )

export const updateAccount = user => dispatch => (
    UsersAPIUtil.updateAccount(user)
    .then(user => dispatch(receiveUser(user)))
)

export const deleteAccount = id => dispatch => (
    UsersAPIUtil.deleteAccount(id)
    .then(() => dispatch(removeUser(id)))
)
