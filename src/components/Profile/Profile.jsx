import React, { useEffect, useRef, useState } from "react";
import AuthService from "../../services/auth.service";
import UserService from '../../services/user.service';
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import './styles.css'

const Profile = () => {
    const [currentUserInfo, setCurrentUserInfo] = useState('')
    const [profileDesc, setProfileDesc] = useState('')
    const [profileLanguages, setProfileLanguages] = useState('')
    const [profileTech, setProfileTech] = useState('')
    const [profileSkills, setProfileSkills] = useState('')
    const [profileWebsite, setProfileWebsite] = useState('')
    const currentUser = AuthService.getCurrentUser();
    const profileForm = useRef()

    useEffect(() => {
        /* GET USER DATA FROM DATABASE */
        handleDataLoading()

        setProfileDesc(currentUserInfo.description)
        setProfileLanguages(currentUserInfo.languages)
        setProfileTech(currentUserInfo.technologies)
        setProfileSkills(currentUserInfo.skills)
        setProfileWebsite(currentUserInfo.website)

    }, [])

    const handleDataLoading = () => {
        UserService.getUserById(currentUser.id).then((res) => {
            setCurrentUserInfo(res.data)
        })



    }

    /* HANDLE PROFILE UPDATE */
    const handleUpdateProfile = async (e) => {
        e.preventDefault()

        await UserService.updateUser(currentUser.id,
            profileLanguages,
            profileTech,
            profileSkills,
            profileWebsite, profileDesc).then((res => {
                console.log('user updated');
            }, (error) => {
                console.log(error)
            }))

        handleDataLoading()

    }
    /* HANDLE FIELDS VALUE IN FORM */
    const handleLanguageChange = (e) => {
        const lang = e.target.value
        setProfileLanguages(lang)
    }
    const handleTechChange = (e) => {
        const tech = e.target.value
        setProfileTech(tech)
    }
    const handleWebsiteChange = (e) => {
        const website = e.target.value
        setProfileWebsite(website)
    }
    const handleSkillsChange = (e) => {
        const skills = e.target.value
        setProfileSkills(skills)
    }
    const handleDescChange = (e) => {
        const desc = e.target.value
        setProfileDesc(desc)
    }


    return (
        <div className='profile-section'>
            <div className="profile-content">
                <div className="profile-section-header"><h1>profile</h1></div>
                <div className="profile-board">
                    <div className="profile-board-header">
                        <h5>{currentUserInfo.username}'s profile</h5>
                    </div>
                    <div className="profile-board-body">

                        <div className="profile-field">                       <strong>Username:</strong><span>{currentUserInfo.username}</span>
                        </div>
                        <div className="profile-field">                       <strong>Email:</strong><span>{currentUserInfo.email}</span>
                        </div>
                        <div className="profile-field">                       <strong>Technologies:</strong><span>{currentUserInfo.technologies}</span>
                        </div>
                        <div className="profile-field">                       <strong>Programming Languages:</strong><span>{currentUserInfo.languages}</span>
                        </div>
                        <div className="profile-field">                       <strong>Skills:</strong><span>{currentUserInfo.skills}</span>
                        </div> <div className="profile-field">                       <strong>Website:</strong><span>{currentUserInfo.website}</span>
                        </div> <div className="profile-field">                       <strong>Description:</strong><span>{currentUserInfo.description}</span>
                        </div>

                    </div>
                </div>
                <div className="profile-content-board">
                    <div className="profile-content-header">
                        <h5>Edit Fields</h5>
                    </div>
                    <div className="profile-content-body">
                        <Form className='profile-form' onSubmit={handleUpdateProfile} ref={profileForm}>
                            <div className="form-group">
                                <label htmlFor="languages">Programming Languages</label>
                                <Input type='text' name='languages' onChange={handleLanguageChange} value={profileLanguages} placeholder={currentUserInfo.languages} />
                                <label htmlFor="technologies">Technologies</label>
                                <Input type='text' name='technologies' onChange={handleTechChange} value={profileTech} placeholder={currentUserInfo.technologies} />

                                <label htmlFor="skills">Skills</label>
                                <Input type='text' name='skills' onChange={handleSkillsChange} value={profileSkills} placeholder={currentUserInfo.skills} />
                                <label htmlFor="website">Website</label>
                                <Input type='text' name='website' onChange={handleWebsiteChange} value={profileWebsite} placeholder={currentUserInfo.website} />

                                <label htmlFor="description">Description</label>
                                <textarea type='text' name='description' onChange={handleDescChange} value={profileDesc} placeholder={currentUserInfo.description} cols="35" rows="5" />




                            </div>
                            <div className="form-group">
                                <button className='btn btn-block btn-light btn-submit' styles={{ left: '0px' }}>Update</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
