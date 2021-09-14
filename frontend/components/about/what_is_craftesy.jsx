import React from 'react';

const AboutCraftesy = () => {
    return (
        <section className='about-craftesy'>
            <div className='about-craftesy-head'>
                <h2>What is Craftesy?</h2>
                <p>Thanks for taking the time to visit</p>
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
                        Want to sell something specially crafted for you, by others like you? Look no further. 
                        We will help you make your dream to sell easy, currently in development. 
                        We will help you reach out to millions of others who have a love for video games.
                    </p>
                </div>
            </div>
            <div className='back-to-top-link'>
                <h4>Not done looking? Quick, jump back to the top!</h4>
                <button>To the Top!</button>
            </div>
        </section>
    )
}

export default AboutCraftesy;