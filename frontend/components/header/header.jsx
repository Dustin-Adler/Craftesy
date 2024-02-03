import React from 'react'
import { Link, withRouter, history } from 'react-router-dom'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {searchString: this.props.searchString}
    }

    signInButton() {
        if (this.props.currentUser){
            return (<button
                className="sign-in-button"
                onClick={()=> this.props.logout()}
                >Sign Out
            </button>)
        } else {
            return (<button
                className="sign-in-button"
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

    routeToProductSearchIndex() {
        if(this.props.history.location.pathname !== '/products/search') {
            return this.props.history.push('/products/search')
        }
    }

    handleSearchInput(e) {
        if (e.key === "Enter") {
            console.log(this.state.searchString)
            this.props.searchByProductName(this.state.searchString)
            .then(
                this.clearSearchBar(),
                this.routeToProductSearchIndex()
            )
        }
    }

    render() {
        
        return(
            <div className='header'>
                <div className='search-sign-in-and-cart'>
                    <Link to='/'><div className="logo">Craftesy</div></Link>
                    <input 
                        onKeyDown={(e) => this.handleSearchInput(e)}
                        onChange={this.update()}
                        value= {this.state.searchString}
                        type="search"
                        className='main-search-field'
                        placeholder="It's dangerous to go alone..."
                    />
                    {this.signInButton()}
                    <button className='cart-icon'>
                        <Link to='/cart'>
                            🛒
                        </Link>
                    </button>
                </div>
                <div className='categories-list'>
                    <Link to="/">Weapons</Link>
                    <Link to="/">Armor</Link>
                    <Link to="/">Alchemy</Link>
                    <Link to="/">Enchantments</Link>
                    <Link to="/">Woodworking</Link>
                    <Link to="/">Metallurgy</Link>
                    <Link to="/">Jewelery</Link>
                    <Link to="/">Botany</Link>
                    <Link to="/">Consumables</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);