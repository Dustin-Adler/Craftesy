import React from 'react';
import { scrollToTopOfPage } from '../../helpers/scroll_helper';

class AboutCraftesy extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='about-craftesy-background'>
                <div className='about-craftesy'>
                    <div className='about-craftesy-head'>
                        <h2>What is Craftesy?</h2>
                        <a className='github-link'
                            target="_blank"
                            href="https://github.com/Dustin-Adler/Craftesy">
                                Want to know more about Craftesy? Check out the github!
                        </a>
                    </div>
                    <div className='about-craftesy-sections'>
                        <div>
                            <h3>About me</h3>
                            <p>
                                Hardworking father of three beautiful princesses and one courageous prince, with an affinity for coding and technology.
                                I have a passion for gaming that started when I was young, playing classics like Zelda, Mario, Pokémon, and more. 
                                I created this website to share my love, and nostalgia for games with others, just as I have with my children.
                            </p>
                        </div>
                        <div>
                            <h3>Goals</h3>
                            <p>
                                I have always had an interest in technology, games, and strategy. 
                                With an eagerness to learn, and figure out how things work, I found myself dabbling in the world of software development. 
                                Everything connects and works together like a puzzle, and viewing it as such makes finding the missing pieces a rewarding challenge. 
                                I have learned a great deal about problem-solving, collaboration, and the importance of continuous learning through this project, and 
                                I plan to continue doing so at every opportunity.
                            </p>
                        </div>
                        <div>
                            <h3>Support Indie Creators</h3>
                            <p>
                                Want to sell something specially crafted by you, by others like you? Look no further!
                                We will help you reach out to millions of others who have the same love for video game items.
                                There are currently no plans to add features that would allow users to create a store or add products.
                            </p>
                        </div>
                    </div>
                    <div className='back-to-top-link'>
                        <h4>Not done looking? Quick, jump back to the top!</h4>
                        <button onClick={() => scrollToTopOfPage()}>To the Top!</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutCraftesy;