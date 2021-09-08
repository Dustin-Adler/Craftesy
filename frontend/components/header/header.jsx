import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <div className='search-sign-in-and-cart'>
                    <label>Craftesy
                        <input 
                            type="search"
                            className='main-search-field'
                            placeholder="It's dangerous to go alone..."
                        />
                    </label>

                    <button
                        className="sign-in-button">Sign In
                    </button>

                    <button
                        className='cart-icon'>Cart-Icon
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