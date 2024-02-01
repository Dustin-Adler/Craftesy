import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.searchString
        // console.log(this.state)
    }

    // componentDidMount() {

    // }

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

    update(field){
        return (e) => {
            // console.log(field, this.state, e.currentTarget)
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSearchInput(e) {
        if (e.key === "Enter") {
            this.props.searchByProductName(this.state)
        }
    }

    render() {
        
        return(
            <div className='header'>
                <div className='search-sign-in-and-cart'>
                    <Link to='/'><div className="logo">Craftesy</div></Link>
                    <input 
                        onKeyDown={(e) => this.handleSearchInput(e)}
                        onChange={this.update('search')}
                        type="search"
                        className='main-search-field'
                        placeholder="It's dangerous to go alone..."
                    />
                    {this.signInButton()}
                    <button className='cart-icon'>
                        <Link
                            to='/cart'>
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

export default Header;