import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDungeon, faHamburger, faHandPointer} from '@fortawesome/free-solid-svg-icons'
import { faAngellist, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { debounce } from '../../helpers/time'
import SearchAssist from './search_assistance'
import { formatNameAsTitle } from '../../helpers/name_formatter'
import { ALL_CATEGORIES } from '../../utils/game_names'
import { appendOrRemoveScrollBarReplacement } from '../../helpers/scrollbar_calculator'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchString: this.props.searchString,
            catSelOpen: false,
            showSearchAssist: false
        }
    }

    signInButton() {
        if (this.props.currentUser?.id){
            return (<button
                className="sign-in-button button-transition"
                onClick={()=> {this.props.logout(); this.closeCategorySelect(); this.closeSearchAssist()}}
                >Sign Out
            </button>)
        } else {
            return (<button
                className="sign-in-button button-transition"
                onClick={() => {this.props.openModal("login"); this.closeCategorySelect(); this.closeSearchAssist()}}
                >Sign In
            </button>)
        }
    }

    handleScrolling() {
        document.body.className = this.state.catSelOpen || this.state.showSearchAssist ? '' : 'no-scroll'
        appendOrRemoveScrollBarReplacement();
    }

    update() {
        return (e) => {
            this.setState({searchString: e.currentTarget.value})
            this.debouncedSearchSuggestions(e.currentTarget.value)
        }
    }

    updateSearchBar = (searchString = '') => {
        this.setState({searchString})
    }

    searchSuggestions = (search_string) => {
        this.props.searchAssist(search_string)
    }

    debouncedSearchSuggestions = debounce(this.searchSuggestions, 250)

    routeToProductSearchIndex() {
        if(this.props.history.location.pathname !== '/products/search') {
            return this.props.history.push('/products/search')
        }
    }

    togglePopUp(popUp) {
        if (this.state[popUp]) {
            this.setState({[popUp]: false})
        } else {
            this.setState({[popUp]: true})
        }
        this.handleScrolling()
    }

    openSearchAssist() {
        if (!this.state.showSearchAssist) {
            this.setState({showSearchAssist: true})
            this.handleScrolling()
        }
    }

    closeSearchAssist() {
        if (this.state.showSearchAssist) {
            this.setState({showSearchAssist: false})
            this.handleScrolling()
        }
    }

    closeCategorySelect() {
        if (this.state.catSelOpen) {
            this.setState({catSelOpen: false})
            this.handleScrolling()
        }
    }

    handleSearchSelect = (category) => {
        this.props.currentSearch(category)
        this.props.searchByProductName(category)
        this.updateSearchBar(category)
        this.routeToProductSearchIndex()
    }

    handleSearchInput(e) {
        this.closeCategorySelect();
        this.openSearchAssist();
        if (e.key === "Enter") {
            this.props.currentSearch(this.state.searchString)
            this.props.searchByProductName(this.state.searchString)
            .then(
                () => {
                    if (this.state.showSearchAssist) this.togglePopUp('showSearchAssist');
                    this.routeToProductSearchIndex()  
                }
            )
        } else if (e.key === "Escape") {
            this.closeSearchAssist();
        }
    }

    numberOfItemsInCart() {
        const numberOfItemsInCart = this.props.numberOfItemsInCart
        if (numberOfItemsInCart > 0) {
            return (
                <div className='cart-ref'>
                    <span>{numberOfItemsInCart}</span>
                </div>
            )
        } else {
            return null
        }
    }

    createCategoryOptions() {
        if (!this.state.catSelOpen) {
            return null
        }
        const categories = ALL_CATEGORIES;
        let options = [];
        for (let idx = 0; idx < categories.length; idx++) {
            const category = categories[idx]
            const formattedCategory = formatNameAsTitle(category)
            options.push(
                <div key={`${idx}-${category}`} className='category-option'
                    onClick={() => {
                        this.handleSearchSelect(category);
                        this.debouncedSearchSuggestions(category)}}>
                    <div className='select-hand-container'>
                        <FontAwesomeIcon className='select-hand' icon={faHandPointer}/>
                    </div>
                    <p className='option-name'>
                        {formattedCategory}
                    </p>
                </div>
            )
        }
        return (
            <>
                <div className="category-select">
                    {options}
                </div>
                <div 
                    onClick={() => {
                        this.closeCategorySelect();
                        this.closeSearchAssist()}}
                    className='grey-screen-cover'/>
            </>
        )
    }
 
    render() {
        
        return(
            <div className='header'>
                <div className='search-sign-in-and-cart'>
                    <Link
                        onClick={() => {this.closeCategorySelect(); this.closeSearchAssist()}}
                        className="logo-link" to='/'>
                            <div className="logo">Craftesy</div>
                    </Link>
                    <div className="category-select-container button-transition"
                        onClick={() => {this.togglePopUp('catSelOpen'); this.closeSearchAssist();}}>
                            <FontAwesomeIcon className="nav-icon" icon={faHamburger}/>
                            Categories
                            {this.createCategoryOptions()}
                    </div>
                    <div className="search-field-container">
                        <input
                            className='main-search-field'
                        onClick={() => {this.togglePopUp('showSearchAssist'); this.closeCategorySelect()}}
                            onKeyDown={(e) => this.handleSearchInput(e)}
                            onChange={this.update()}
                            value= {this.state.searchString}
                            type="search"
                            placeholder="It's dangerous to go alone..."/>
                        <SearchAssist
                            searchAssist={this.props.searchAssistResults}
                            handleSearchSelect={this.handleSearchSelect}
                            togglePopUp={() => this.togglePopUp('showSearchAssist')}
                            clearSearchAssist={this.props.clearSearchAssist}
                            display={this.state.showSearchAssist}/>
                    </div>
                    {this.signInButton()}
                    <Link className='cart-container button-transition' to='/cart'>
                        <FontAwesomeIcon className='cart' icon={faCartShopping}/>
                        {this.numberOfItemsInCart()}
                    </Link>
                </div>
                <div className='professional-links'>
                    <a
                        onClick={() => {this.closeCategorySelect(); this.closeSearchAssist()}}
                        className='header-links button-transition'
                        target="_blank"
                        href="https://www.linkedin.com/in/dustin-adler-software-eng-web-dev/">
                            <FontAwesomeIcon className='nav-icon linked-in' icon={faLinkedin}/>
                            LinkedIn
                    </a>
                    <a
                        onClick={() => {this.closeCategorySelect(); this.closeSearchAssist()}}
                        className='header-links button-transition'
                        target="_blank"
                        href="https://wellfound.com/u/dustin-adler">
                            <FontAwesomeIcon className='nav-icon well-found' icon={faAngellist}/>
                            AngelList/WellFound
                    </a>
                    <a
                        onClick={() => {this.closeCategorySelect(); this.closeSearchAssist()}}
                        className='header-links button-transition'
                        target="_blank"
                        href="https://github.com/Dustin-Adler">
                            <FontAwesomeIcon className='nav-icon github' icon={faGithub}/>
                            Github
                    </a>
                    <a
                        onClick={() => {this.closeCategorySelect(); this.closeSearchAssist()}}
                        className='header-links button-transition'
                        target="_blank"
                        href="https://dustin-adler.github.io/Relda_Legend_of_Nitsud/">
                            <FontAwesomeIcon className='nav-icon relda' icon={faDungeon}/>
                            The Legend of Relda
                    </a>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
