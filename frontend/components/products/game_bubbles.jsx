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
                <div className='game-art-bubbles'>
                    <div onClick={() => this.handleClickBubble('mario')}>
                        <img className='circle-splash' src={images.mario} alt="Super Mario" />
                        <h5>Super Mario</h5>
                    </div>
                    <div onClick={() => this.handleClickBubble('final fantasy')}>
                        <img className='circle-splash sword' src={images.ffvii} alt="Buster Sword" />
                        <h5>Final Fantasy</h5>
                    </div>
                    <div onClick={() => this.handleClickBubble('sonic')}>
                        <img className='circle-splash' src={images.sonic} alt="Super Speed Boots" />
                        <h5>Sonic</h5>
                    </div>
                    <div onClick={() => this.handleClickBubble('zelda')}>
                        <img className='circle-splash' src={images.zelda} alt="Heart Container" />
                        <h5>Zelda</h5>
                    </div>
                    <div onClick={() => this.handleClickBubble('fortnite')}>
                        <img className='circle-splash llama' src={images.fortnite} alt="Llama Pinata" />
                        <h5>Fortnite</h5>
                    </div>
                    <div onClick={() => this.handleClickBubble('league of legends')}>
                        <img className='circle-splash' src={images.lol} alt="Trinity Force" />
                        <h5>League of Legends</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameBubbles;