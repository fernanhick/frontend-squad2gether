import React from 'react'
import createImage from '../../images/create-post.png'
import searchImage from '../../images/search-posts.png'
import './styles.css'
const About = () => {
    return (
        <div className="about-section">

            <div className="about-content">
                <div className="about-header"><h1>About</h1></div>
                <div className="about-content-body">
                    <div className="search-desc"> <img src={searchImage} alt="" /> <p>SquadHunt is a website for people to connect, nowdays many people start collaborating with each other putting together their skill for creating products independently of working for someone. In here we give the users the option to search Projects of interest and start collaborating in these projects.</p></div>
                    <div className="create-desc">
                        <p>Create a new post for the Project of your dreams, include a brief description, members needed, technologies that will be involved and start receiving comments of others users so you can connect and start today your dream project.</p><img src={createImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About