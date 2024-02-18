import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles, faHatWizard, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Carousel from './carousel'

class ScrollingProducts extends React.Component {
    constructor(props) {
        super(props)
    }

    createCarousels(products, numberOfCarousels = 3) {
        const prodArr = Object.values(products)
        const carousels = [];
        const increment = Math.floor(prodArr.length / numberOfCarousels);
        let start = 0;
        let end = increment;
        for (let i = 0; i < numberOfCarousels; i++) {
            const direction = (i % 2 === 0) ? "reverse" : "forwards"
            const carouselProducts = prodArr.slice(start, end)
            carousels.push(
                    <Carousel 
                        key={i}
                        colorOffset={i*2}
                        products={carouselProducts}
                        direction={direction}>
                    </Carousel>
                )
            start += increment
            end += increment
        }
        return (
            carousels
        )
    }

    pauseAnimation() {
        let carouselContainer = document.getElementsByClassName('scrolling-products-carousel-container')[0]
        let playButton = document.getElementById('play-button')
        let pauseButton = document.getElementById('pause-button')
        const playState = carouselContainer.getAttribute('data-play-state')
        if (playState === 'play') {
            carouselContainer.setAttribute('data-play-state', "pause" )
            playButton.style.display = 'block'
            pauseButton.style.display = 'none'
        } else {
            carouselContainer.setAttribute('data-play-state', "play" )
            playButton.style.display = 'none'
            pauseButton.style.display = 'block'
        }
    }

    render() {
        return (
            <div className='scrolling-products-container'>
                <div className='scrolling-products-background'>
                    <div className='text-and-buttons-container'>
                        <div className='sparkle-link-container'>
                            <FontAwesomeIcon className='wizard-hat' icon={faHatWizard}/> 
                            <a className='sparkle-link'
                                href="https://www.linkedin.com/in/dustin-adler-software-eng-web-dev/"
                                target='_blank'>
                                    A website by Dustin Adler
                            </a>
                            <FontAwesomeIcon className='magic-wand' icon={faWandMagicSparkles}/>
                        </div>
                        <h2 className='welcome'>
                            Welcome to Craftesy, inspired by Etsy.
                        </h2>
                        <button className='shop-button'>Shop Now</button>
                    </div>
                    <div data-play-state='play' 
                        className="scrolling-products-carousel-container">
                        {this.createCarousels(this.props.products)}
                        <FontAwesomeIcon
                            onClick={() => this.pauseAnimation()}
                            id='pause-button'
                            icon={faPauseCircle}/>
                        <FontAwesomeIcon
                            onClick={() => this.pauseAnimation()}
                            id='play-button'
                            icon={faPlayCircle}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScrollingProducts;