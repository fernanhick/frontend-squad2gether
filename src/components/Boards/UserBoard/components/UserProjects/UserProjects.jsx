import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../../../../../services/auth.service';
import ProjectService from '../../../../../services/project.service';
import UserService from '../../../../../services/user.service';
import './styles.css'



const UserProjects = () => {
    const user = AuthService.getCurrentUser()
    const [currentUser, setCurretUser] = useState('')
    const [message, setMessage] = useState('')
    useEffect(() => {
        setInterval(() => {
            UserService.getUserById(user.id).then(
                (response) => {
                    setCurretUser(response.data)
                },
                (error) => {
                    const _project =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message || error.toString();
                    setMessage(_project);
                }
            );
        }, 1000);
    }, []);
    let projectIT = 0

    const deleteProject = (id) => {
        ProjectService.deleteProjectById(id)
    }

    return (
        <div className="user-projects-section"><h5>User Projects</h5>{message}
            <div className='user-projects'>{currentUser ? (
                currentUser.projects.map((project, index) => (


                    <div
                        className="project"
                        key={index}
                        style={{
                            background:
                                index % 2 === 0
                                    ? "rgb(0,0,100)"
                                    : "rgb(4, 85, 133)",
                        }}
                    >
                        <div className="project-body">
                            <h5 className="project-title">
                                {project.title}<div className="delete-btn" onClick={() => { deleteProject(project._id) }}>Delete</div>
                            </h5><Link className='project-link show-project' style={{ animationDuration: `1.${projectIT++}s` }} to={`/project/${project._id}`}>
                                <div className="project-description">
                                    <div className="project-desc">
                                        {" "}
                                        <strong>Description: </strong>
                                        <span>
                                            {project.description}
                                        </span>
                                    </div>
                                    <div className="project-tech">
                                        <strong>Technologies: </strong>
                                        <span>
                                            {project.technologies}
                                        </span>
                                    </div>{" "}
                                    <div className="project-memb">
                                        <strong>Members: </strong>
                                        <span>
                                            {project.members}
                                        </span>
                                    </div>
                                </div>
                            </Link> </div>
                    </div>
                ))
            ) : (
                <></>
            )}</div></div >
    )
}

export default UserProjects