  export const getAccountFromEmail = (email) => (
    $.ajax({
      url: '/api/users/getAccountFromEmail',
      method: 'get',
      data: { email }
    })
  )
  
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