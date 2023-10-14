import React from 'react';
import { ExternalLink } from 'react-external-link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    return(
        <div className='footer'>
            <div className='group-of-descriptors'>
                <ul className='project-descriptors'>
                    <h3 className='top-of-list'>Technologies</h3>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Ruby</li>
                    <li>Rails</li>
                    <li>Jquery</li>
                    <li>SCSS/CSS</li>
                    <li>AWS</li>
                    <li>Heroku</li>
                </ul>
                <ul className='project-descriptors'>
                    <h3 className='top-of-list'>Interests</h3>
                    <li>Engineering</li>
                    <li>Technology</li>
                    <li>Organization</li>
                    <li>Learning</li>
                    <li>Project Management</li>
                    <li>Graphic Design</li>
                </ul>
                <ul className='project-descriptors'>
                    <h3 className='top-of-list'>Why Craftesy</h3>
                    <li>Full Stack Development</li>
                    <li>CRUD</li>
                    <li>Sales Platform</li>
                    <li>Peer to Peer</li>
                    <li>Nostalgic Games</li>
                </ul>
                <ul className='project-descriptors'>
                    <h3 className='top-of-list'>What's next?</h3>
                    <li>Continued Development</li>
                    <li>Broadening/Deepening Skillset</li>
                    <li>Great Job!</li>
                </ul>
            </div>
            <nav className='professional-links'>
                <ExternalLink href='https://github.com/Dustin-Adler'> <GitHubIcon className='icon'></GitHubIcon>  </ExternalLink>
                <ExternalLink href='https://www.linkedin.com/in/dustin-adler-software-eng-web-dev/'> <LinkedInIcon className='icon'></LinkedInIcon> </ExternalLink>
                <h4>Personal Site: Coming Soon</h4>
            </nav>
            <div className='heel'>
                <div className='location'>
                    <p>UnitedStates | English | {"$(USD)"}</p>
                </div>
                <div className='terms-privacy-ads'>
                    <p>© 2023 Craftesy, Inc.</p>
                    <p className='underline'>No Terms of use</p>
                    <p className='underline'>Open to the public</p>
                    <p className='underline'>Ad free</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;