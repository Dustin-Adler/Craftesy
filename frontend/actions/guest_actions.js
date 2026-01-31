export const RECEIVE_GUEST = 'RECEIVE_GUEST'
export const REMOVE_GUEST = 'REMOVE_GUEST'

export const receiveGuest = guest => ({
    type: RECEIVE_GUEST,
    guest
});

export const removeGuest = () => ({
    type: REMOVE_GUEST
});
