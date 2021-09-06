export const registerAccount = (user) => (
    $.ajax({
      url: '/api/users',
      method: 'post',
      data: { user }
    })
)

export const updateAccount = (user) => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: 'patch',
        data: {user}
    })
)

export const deleteAccount = (id) => (
    $.ajax({
        url: `/api/users/${id}`,
        method: 'delete',
    })
)