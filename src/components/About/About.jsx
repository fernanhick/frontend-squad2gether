import React from 'react'
import createImage from '../../images/create-post.png'
import searchImage from '../../images/search-posts.png'
import commentImage from '../../images/comment-posts.png'
import profileImage from '../../images/profile-desc.png'
import './styles.css'
const About = () => {
    return (
        <div className="about-section">

            <div className="about-content">
                <div className="about-header"><h1>About</h1></div>
                <div className="about-content-body">
                    <div className="search-desc"> <img src={searchImage} alt="search for projects posts" /> <p>SquadHunt is a website for people to connect, nowdays many people start collaborating with each other putting together their skill for creating products independently of working for someone. In here we give the users the option to search Projects of interest and start collaborating in these projects.</p></div>
                    <div className="create-desc">
                        <p>Create a new post for the Project of your dreams, include a brief description, members needed, technologies that will be involved and start receiving comments of others users so you can connect and start today your dream project.</p><img src={createImage} alt="create new posts for your project" />
                    </div>
                    <div className="comment-desc"><img src={commentImage} alt="comments projects posts" />
                        <p>Look for projects of interest and add comment so you can get in contact with the other users related to the project, you can delete any comments you have posted and like the Project post.</p>

                    </div>
                    <div className="profile-desc">
                        <p>Setup your profile so other users can look at you info and contact you based on your skill and experience. Include all your details so you can show what youre made of and start collaborating today.</p><img src={profileImage} alt="create new posts for your project" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About