import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ProjectService from '../../../services/project.service';
import './styles.css'
const Projects = () => {
    const [searchValue, setSearchValue] = useState('')
    const [projects, setProjects] = useState('')
    const [setMessage] = useState('')
    useEffect(() => {
        ProjectService.getProjects().then((response) => {
            setProjects(response.data)
        }, (error) => {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            setMessage(message)
        })
    }, [setMessage])


    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }
    let projectIT = 0
    return <div className='projects-page-section'>
        <div className="projects-section-wrapper">
            <div className="projects-page-header">
                <h1>Projects</h1>
            </div>
            <div className="projects-search-bar">
                <strong>Search For Projects</strong>
                <input type='text' value={searchValue} onChange={handleSearchChange} />

            </div>

            <div className="projects-list">
                {projects && projects.map((project) => (
                    project.description.toLowerCase().includes(searchValue.toLowerCase()) || project.title.toLowerCase().includes(searchValue.toLowerCase())
                        || project.technologies.toLowerCase().includes(searchValue.toLowerCase())
                        ?
                        <Link className='project-link show-project' style={{ animationDuration: `1.${projectIT++}s` }} key={project._id} to={`/project/${project._id}`}>
                            < div className="project-container"  >
                                <div className="header-project"><h5>{project.title}</h5></div>
                                <div className="body-project">
                                    <p><strong>Description: </strong>{project.description}</p>
                                    <p><strong>Members: </strong>{project.members}</p>
                                    <p><strong>Technologies: </strong>{project.technologies}</p>
                                </div>
                            </div></Link>
                        : <></>))}
            </div>
        </div>
    </div >;
};
export default Projects;
