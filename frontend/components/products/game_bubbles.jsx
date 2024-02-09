import React from 'react'
import { Link } from 'react-router-dom'

class GameBubbles extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const numberOfImages = Object.keys(this.props.images).length;
        if (numberOfImages < 6) {
            this.props.getProducts()
        }
    }

    routeToProductSearchIndex() {
        if(this.props.history.location.pathname !== '/products/search') {
            return this.props.history.push('/products/search')
        }
    }

    handleClickBubble(game) {
        this.props.searchByProductName(game)
            .then(
                setTimeout(() => {
                    this.routeToProductSearchIndex()
                }, 50)
            )
    }

    render() {
        const images = this.props.images;
        return (
            <div className='game-bubbles'>
                <div className='background-style'>
                    <h2>Check out our unique in-game items</h2>
                </div>
                <ul className='game-art-bubbles'>
                    <li onClick={() => this.handleClickBubble('mario')}
                        className='circle-splash-container'>
                            <img className='circle-splash' src={images.mario} alt="Super Mario"/>
                            <h5>Super Mario</h5>
                    </li>
                    <li onClick={() => this.handleClickBubble('final fantasy')}
                        className='circle-splash-container'>
                            <img className='circle-splash sword' src={images.ffvii} alt="Buster Sword" />
                            <h5>Final Fantasy</h5>
                    </li>
                    <li onClick={() => this.handleClickBubble('sonic')}
                        className='circle-splash-container'>
                            <img className='circle-splash' src={images.sonic} alt="Super Speed Boots" />
                            <h5>Sonic</h5>
                    </li>
                    <li onClick={() => this.handleClickBubble('zelda')}
                        className='circle-splash-container'>
                            <img className='circle-splash' src={images.zelda} alt="Heart Container" />
                            <h5>Zelda</h5>
                    </li>
                    <li onClick={() => this.handleClickBubble('fortnite')}
                        className='circle-splash-container'>
                            <img className='circle-splash llama' src={images.fortnite} alt="Llama Pinata" />
                            <h5>Fortnite</h5>
                    </li>
                    <li onClick={() => this.handleClickBubble('league of legends')}
                        className='circle-splash-container'>
                            <img className='circle-splash' src={images.lol} alt="Trinity Force" />
                            <h5>League of Legends</h5>
                    </li>
                </ul>
            </div>
        )
    }
}

export default GameBubbles;