import { connect } from 'react-redux'
import EmptyCart from './empty_cart';
import { searchByProductName, getProducts } from '../../actions/product_actions';
import { openModal } from '../../actions/modal_actions';

const randomlySelectOneProduct = (products) => {
    if (products.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

const oneProductFromEachGame = (products) => {
    const productsByGame = {}

    for (const product of products) {
        const game_name = product.game_name.trim().toLowerCase()
        if (productsByGame[game_name]) {
            productsByGame[game_name].push(product)
        } else {
            productsByGame[game_name] = [product]
        }
    }

    const selectedProducts = []
    for (const game in productsByGame) {
        selectedProducts.push(randomlySelectOneProduct(productsByGame[game]))
    }

    return selectedProducts
}

const mSTP = (state) => {
    const products = oneProductFromEachGame(Object.values(state.entities.products));

    return {
        products: products
    }
}

const mDTP = (dispatch) => {
    return {
        searchByProductName: (search_string) => dispatch(searchByProductName(search_string)),
        openModal: (modal) => dispatch(openModal(modal)),
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mSTP, mDTP)(EmptyCart);
