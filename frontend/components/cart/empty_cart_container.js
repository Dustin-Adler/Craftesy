import { connect } from 'react-redux'
import EmptyCart from './empty_cart';
import { searchByProductName } from '../../actions/product_actions';
import { openModal } from '../../actions/modal_actions';

const oneProductFromEachGame = (products) => {
    const productsByGame = {}
    productsByGame.zelda = products.filter( product => product.game_name.trim().toLowerCase() === "zelda")
    productsByGame.pokemon = products.filter( product => product.game_name.trim().toLowerCase() === "pokemon")
    productsByGame.mario = products.filter( product => product.game_name.trim().toLowerCase() === "mario")
    productsByGame.finalFantasy = products.filter( product => product.game_name.trim().toLowerCase() === "final fantasy")
    productsByGame.leagueOfLegends = products.filter( product => product.game_name.trim().toLowerCase() === "league of legends")
    productsByGame.sonic = products.filter( product => product.game_name.trim().toLowerCase() === "sonic")
    productsByGame.fortnite = products.filter( product => product.game_name.trim().toLowerCase() === "fortnite")

    const selectedProducts = []
    for (const game in productsByGame) {
        selectedProducts.push(randomlySelectOneProduct(productsByGame[game]))
    }

    return selectedProducts
}

const randomlySelectOneProduct = (products) => {
    if (products.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

const mSTP = (state) => {
    const products = oneProductFromEachGame(Object.values(state.entities.products)).filter(product => product !== null);

    return {
        products: products
    }
}

const mDTP = (dispatch) => {
    return {
        searchByProductName: (search_string) => dispatch(searchByProductName(search_string)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mSTP, mDTP)(EmptyCart);
