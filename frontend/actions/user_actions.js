import * as UsersAPIUtil from '../utils/users_api_util'

export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
  })

const removeUser = id => ({
    type: REMOVE_USER, 
    id
})


const receiveEmail = (email) => {
    return {type: RECEIVE_EMAIL,
    email}
  }

export const getAccountFromEmail = (email) => dispatch => (
    SessionAPIUtil.getAccountFromEmail(email)
    .then(userEmail => dispatch(receiveEmail(userEmail)))
)

export const registerAccount = user => dispatch => (
    UsersAPIUtil.registerAccount(user)
      .then(user => dispatch(receiveUser(user)))
  )

export const updateAccount = user => dispatch => (
    UsersAPIUtil.updateAccount(user)
    .then(user => dispatch(receiveUser(user)))
)

export const deleteAccount = id => dispatch => (
    UsersAPIUtil.deleteAccount(id)
    .then(() => dispatch(removeUser(id)))
)
