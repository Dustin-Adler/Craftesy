import React from 'react'

class GameBubbles extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      
        // if (this.props.products === {}){
        //     return null
        // } else { 
            return (
                <div className='game-bubbles'>
                    <div className='background-style'>
                        <h2>Check out our unique in-game items</h2>
                    </div>
                    <div className='game-art-bubbles'>
                        <div>
                            <img className='circle-splash' src={this.props.images.mario} alt="Super Mario" />
                            <h5>Super Mario</h5>
                        </div>
                        <div>
                            <img className='circle-splash sword' src={this.props.images.ffvii} alt="Buster Sword" />
                            <h5>Final Fantasy</h5>
                        </div>
                        <div>
                            <img className='circle-splash' src={this.props.images.sonic} alt="Super Speed Boots" />
                            <h5>Sonic</h5>
                        </div>
                        <div>
                            <img className='circle-splash' src={this.props.images.zelda} alt="Heart Container" />
                            <h5>Zelda</h5>
                        </div>
                        <div>
                            <img className='circle-splash llama' src={this.props.images.fortnite} alt="Llama Pinata" />
                            <h5>Fortnite</h5>
                        </div>
                        <div>
                            <img className='circle-splash' src={this.props.images.lol} alt="Trinity Force" />
                            <h5>League</h5>
                        </div>
                    </div>
                </div>
            )
        // }
    }
}

export default GameBubbles;