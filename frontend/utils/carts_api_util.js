export const getCart = () => (
    $.ajax({
        url: `api/carts`,
        method: 'get'
    })
)

export const createCartItem = (cart) => (
    $.ajax({
        url: `api/carts`,
        method: 'post',
        data: {cart}
    })
)

export const deleteCartItem = (id) => (
    $.ajax({
        url: `api/carts/${id}`,
        method: 'delete'
    })
)

export const updateCartItem = (cart) => (
    $.ajax({
        url: `api/carts/${cart.id}`,
        method: 'patch',
        data: {cart}
    })
)