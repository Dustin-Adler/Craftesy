export const getImages = () => (
    $.ajax({
        url: `/api/products/get_game_images`,
        method: 'get'
    })
)