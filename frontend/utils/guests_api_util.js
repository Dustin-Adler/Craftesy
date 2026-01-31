export const getGuest = () => (
    $.ajax({
        url: '/api/guests/create',
        method: 'post'
    })
)

export const upgradeGuest = (user) => (
    $.ajax({
        url: '/api/guests/upgrade_guest_to_user',
        method: 'post',
        data: { user }
    })
)