import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import GameBubbles from "./game_bubbles";

const mSTP = (state) => {
    const products = Object.values(state.entities.products)
    const imgs = {}
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        switch (product.name) {
            case "Cape Feather":
                imgs['mario'] = product.images[1].url
                break;
            case "Cloud's Buster Sword":
                imgs['ffvii'] = product.images[0].url
                break;
            case "Speed Boots":
                imgs['sonic'] = product.images[0].url
                break;
            case "Heart Container":
                imgs['zelda'] = product.images[0].url
                break;
            case "Llama Pinata":
                imgs['fortnite'] = product.images[0].url
                break;
            case "Trinity Force":
                imgs['lol'] = product.images[0].url
                break;
            default:
                break;
        }
    }
    return {
        images: imgs
    }
}

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(ProductActions.getProducts())
})

export default connect(mSTP, mDTP)(GameBubbles)