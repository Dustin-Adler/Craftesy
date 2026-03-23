import {openModal} from '../../actions/modal_actions'
import { connect } from 'react-redux'
import Header from './header'
import { logout } from '../../actions/session_actions'
import { searchByProductName, searchAssist } from '../../actions/product_actions'
import { currentSearch, clearSearch, clearSearchAssist } from '../../actions/search_actions'
import { getCartItems } from '../../actions/cart_actions'

const mSTP = (state) => ({
    currentUser: Object.values(state.entities.users)[0],
    searchString: '',
    numberOfItemsInCart: Object.values(state.entities.cart).length,
    searchAssistResults: state.ui.search.searchAssist
})

const mDTP = (dispatch) => ({
    openModal: (value) => dispatch(openModal(value)),
    logout: () => dispatch(logout()),
    searchByProductName: (searchString) => dispatch(searchByProductName(searchString)),
    currentSearch: (search) => dispatch(currentSearch(search)),
    clearSearch: () => dispatch(clearSearch()),
    searchAssist: (string) => dispatch(searchAssist(string)),
    clearSearchAssist: () => dispatch(clearSearchAssist()),
    getCartItems: () => dispatch(getCartItems())
})

export default connect(mSTP, mDTP)(Header);