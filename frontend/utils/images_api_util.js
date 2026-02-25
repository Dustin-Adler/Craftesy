export const getImages = () => (
    $.ajax({
        url: `/api/products/game_images`,
        method: 'get'
    })
)