import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDungeon, faHamburger, faHandPointer, faHouseCrack } from '@fortawesome/free-solid-svg-icons'
import { faAngellist, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchString: this.props.searchString,
            catSelOpen: false
        }
    }

    signInButton() {
        if (this.props.currentUser){
            return (<button
                className="sign-in-button button-transition"
                onClick={()=> this.props.logout()}
                >Sign Out
            </button>)
        } else {
            return (<button
                className="sign-in-button button-transition"
                onClick={() => this.props.openModal("login")}
                >Sign In
            </button>)
        }
    }

    update() {
        return (e) => {
            this.setState({searchString: e.currentTarget.value})
        }
    }

    clearSearchBar() {
        return (
            this.setState({searchString: ''})
        )
    }

    handleSearchInput(e) {
        if (e.key === "Enter") {
            this.props.searchByProductName(this.state.searchString)
            .then(
                this.clearSearchBar(),
                setTimeout(() => {
                    this.routeToProductSearchIndex();
                }, 50)
            )
        }
    }

    routeToProductSearchIndex() {
        if(this.props.history.location.pathname !== '/products/search') {
            return this.props.history.push('/products/search')
        }
    }

    handleCategorySelect(category) {
        this.props.searchByProductName(category)
        .then(
            setTimeout(() => {
                this.routeToProductSearchIndex();
            }, 50)
        )
    }

    toggleCatMenu() {
        const greyScreen = document.getElementById('grey-screen-cover');
        if (this.state.catSelOpen) {
            this.setState({catSelOpen: false})
            greyScreen.style.display = 'none'
        } else {
            this.setState({catSelOpen: true})
            greyScreen.style.display = 'block'
        }
    }

    createCategoryOptions() {
        if (!this.state.catSelOpen) {
            return null
        }
        const categories = ['mario', 'final fantasy', 'sonic', 'zelda', 'fortnite', 'league of legends'];
        let options = [];
        for (let i = 0; i < categories.length; i++) {
            const optionName = categories[i].replace(/\b[a-z](?!\s)/g, (char) => {return char.toUpperCase()})
            const option =
                <div key={i} className='category-option'
                    onClick={() => this.handleCategorySelect(categories[i])}>
                    <div className='select-hand-container'>
                        <FontAwesomeIcon className='select-hand' icon={faHandPointer}/>
                    </div>
                    <p className='option-name'>
                            {optionName}
                    </p>
                </div>
            options.push(option)
        }
        return (
            <div className="category-select">
                {options}
            </div>
        )
    }

    render() {
        
        return(
            <div className='header'>
                <div className='search-sign-in-and-cart'>
                    <Link className="logo-link" to='/'>
                        <div className="logo">Craftesy</div>
                    </Link>
                    <div className="category-select-container button-transition"
                        onClick={() => this.toggleCatMenu()}>
                            <FontAwesomeIcon className="nav-icon" icon={faHamburger}/>
                            Categories
                            {this.createCategoryOptions()}
                    </div>
                    <input
                        onKeyDown={(e) => this.handleSearchInput(e)}
                        onChange={this.update()}
                        value= {this.state.searchString}
                        type="search"
                        className='main-search-field'
                        placeholder="It's dangerous to go alone..."/>
                    {this.signInButton()}
                    <Link className='cart button-transition' to='/cart'>
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </Link>
                </div>
                <div className='professional-links'>
                    <a className='header-links button-transition' target="_blank" href="https://www.linkedin.com/in/dustin-adler-software-eng-web-dev/">
                        <FontAwesomeIcon className='nav-icon linked-in' icon={faLinkedin}/>
                        LinkedIn
                    </a>
                    <a className='header-links button-transition' target="_blank" href="https://wellfound.com/u/dustin-adler">
                        <FontAwesomeIcon className='nav-icon well-found' icon={faAngellist}/>
                        AngelList/WellFound
                    </a>
                    <a className='header-links button-transition' target="_blank" href="https://github.com/Dustin-Adler">
                        <FontAwesomeIcon className='nav-icon github' icon={faGithub}/>
                        Github
                    </a>
                    <a className='header-links button-transition' target="_blank" href="https://dustin-adler.github.io/Relda_Legend_of_Nitsud/">
                        <FontAwesomeIcon className='nav-icon relda' icon={faDungeon}/>
                        The Legend of Relda
                    </a>
                    <a className='header-links button-transition' target="_blank" href="https://come-what-may.herokuapp.com/#/">
                        <FontAwesomeIcon className='nav-icon come-what-may' icon={faHouseCrack}/>
                        Come What May
                    </a>
                </div>
                <div id='grey-screen-cover'></div>
            </div>
        )
    }
}

export default withRouter(Header);