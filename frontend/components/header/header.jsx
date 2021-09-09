import React from 'react'
import { Link } from 'react-router-dom'
// import modal from '../modal/modal';

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {

    }

    signInButton(){
        if (this.props.currentUser){
            return (<button
                className="sign-in-button"
                onClick={()=> this.props.logout()}
                >Sign Out
            </button>)
        } else {
            return (<button
                className="sign-in-button"
                onClick={() => this.props.openModal("true")}
                >Sign In
            </button>)
        }
    }

    render() {
        return(
            <div className='header'>
                <div className='search-sign-in-and-cart'>
                    <div className="logo">Craftesy</div> 
                        <input 
                            type="search"
                            className='main-search-field'
                            placeholder="It's dangerous to go alone..."
                        />

                    {this.signInButton()}

                    <button
                        className='cart-icon'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
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