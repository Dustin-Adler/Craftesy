import * as GuestAPIUtil from '../utils/guests_api_util';
import { receiveUser } from './user_actions';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_GUEST = 'RECEIVE_GUEST'
export const REMOVE_GUEST = 'REMOVE_GUEST'
export const RECEIVE_ALL_ERRORS = 'RECEIVE_ALL_ERRORS'

const receiveGuest = guest => ({
    type: RECEIVE_GUEST,
    guest
});

const removeGuest = () => ({
    type: REMOVE_GUEST
});

const receiveErrors = errors => ({
    type: RECEIVE_ALL_ERRORS,
    errors
});

export const getGuest = () => dispatch => (
    GuestAPIUtil.getGuest()
    .then(
        guest => dispatch(receiveGuest(guest)),
        error => dispatch(receiveErrors(error.responseJSON))
    )
);

export const upgradeGuest = user => dispatch => (
    GuestAPIUtil.upgradeGuest(user)
    .then(
        () => dispatch(removeGuest()),
        user => dispatch(receiveUser(user)),
        user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
    )
);