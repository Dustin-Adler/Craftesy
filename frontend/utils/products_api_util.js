export const getProducts = () => (
    $.ajax({
        url: `/api/products`,
        method: 'get'
    })
)

export const getProduct = (id) => (
    $.ajax({
        url: `/api/products/${id}`,
        method: 'get'
    })
)

export const createProduct = (product) => (
    $.ajax({
        url: '/api/products',
        method: 'post',
        data: product
    })
)

export const updateProduct = (product) => (
    $.ajax({
        url: `/api/products/${product.id}`,
        method: 'patch',
        data: {product}
    })
)

export const deleteProduct = (id) => (
    $.ajax({
        url: `/api/products/${id}`,
        method: 'delete'
    })
)
