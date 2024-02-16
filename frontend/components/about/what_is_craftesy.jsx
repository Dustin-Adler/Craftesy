import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class AboutCraftesy extends React.Component {
    constructor(props) {
        super(props)
    }

    scrollToTopOfPage() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className='about-craftesy-background'>
                <div className='about-craftesy'>
                    <div className='about-craftesy-head'>
                        <h2>What is Craftesy?</h2>
                        <a className='github-link'
                            href="https://github.com/Dustin-Adler/Craftesy">
                                Want to know more about Craftesy? Check out the github!
                        </a>
                    </div>
                    <div className='about-craftesy-sections'>
                        <div>
                            <h3>About me</h3>
                            <p>
                                Hardworking father of three beautiful princesses, with an affinity for games.
                                My passion for gaming started when I was young with playing classics such as Zelda and Mario. 
                                I hope to create a website where others can share their love, and nostalgia for games with others, just as I have with my children.
                            </p>
                        </div>
                        <div>
                            <h3>Goals</h3>
                            <p>
                                I have always had an interest in games, computers, and puzzles. 
                                With an eagerness to learn, and find exactly how things work, I found myself dabbling in the world of coding. 
                                Looking at it as a puzzle, and seeing how everything connects and works together to make it a whole has made this a different experience for me. 
                                I plan to take these learning experiences and apply them to personal works of my own.
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
                        <button onClick={() => this.scrollToTopOfPage()}>To the Top!</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutCraftesy;