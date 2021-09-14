import { connect } from "react-redux";
import * as ProductActions from "../../actions/product_actions"
import GameBubbles from "./game_bubbles";

const mSTP = (state) => {
    const products = Object.values(state.entities.products)
    const imgs = {}
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        switch (element.name) {
            case "Cape Feather":
                imgs['mario'] = element.images[1].url
                break;
            case "Cloud's Buster Sword":
                imgs['ffvii'] = element.images[0].url
                break;
            case "Speed Boots":
                imgs['sonic'] = element.images[0].url
                break;
            case "Heart Container":
                imgs['zelda'] = element.images[0].url
                break;
            case "Llama Pinata":
                imgs['fortnite'] = element.images[0].url
                break;
            case "Trinity Force":
                imgs['lol'] = element.images[0].url
                break;
            default:
                break;
        }
    }
    return {
        images: imgs,
        products: state.entities.products
    }
}

const mDTP = (dispatch) => ({
    getProducts: () => dispatch(ProductActions.getProducts())
})

export default connect(mSTP, mDTP)(GameBubbles)