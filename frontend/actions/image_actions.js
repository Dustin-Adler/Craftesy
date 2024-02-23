import * as ImageApiUtil from "../utils/images_api_util";
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'

const receiveImages = (images) => ({
    type: RECEIVE_IMAGES,
    images
})

export const getImages = () => (dispatch) => (
    ImageApiUtil.getImages()
        .then(recImages => dispatch(receiveImages(recImages)))
)

export const getProducts = () => (dispatch) => (
    ProductApiUtil.getProducts()
    .then(recProducts => dispatch(receiveProducts(recProducts)))
)