    export const login = (user) => (
    $.ajax({
      url: '/api/session',
      method: 'post',
      data: { user }
    })
  )
  
  export const logout = () => (
    $.ajax({
      url: '/api/session',
      method: 'delete'
    })
  )

  export const guestLogin = () => (
    $.ajax({
      url: '/api/session/guest_login',
      method: 'post'
    })
  )