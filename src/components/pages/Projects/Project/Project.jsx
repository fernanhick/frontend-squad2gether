import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthService from '../../../../services/auth.service'
import Commentservice from '../../../../services/comment.service'
import ProjectService from '../../../../services/project.service'
import { FaRegTimesCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";


import './styles.css'
const Project = () => {
    const [project, setProject] = useState('')
    const [message, setMessage] = useState('')
    const [newComment, setNewComment] = useState('')
    const [successful, setSuccessful] = useState(false)
    const params = useParams()
    const user = AuthService.getCurrentUser()
    const commentRef = useRef()
    useEffect(() => {
        handleDataLoading()
        setTimeout(() => {
            handleDataLoading()
        }, 5000);


    }, [])
    const handleDataLoading = () => {
        ProjectService.getProjectById(params.id).then((res) => {
            setProject(res.data)
        }, (error) => {
            const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            setMessage(message)
        })
    }
    const handleNewComment = (e) => {
        const comment = e.target.value
        setNewComment(comment)
    }


    const handleSumbitComment = (e) => {
        e.preventDefault()
        Commentservice.postComment(params.id, newComment).then((response) => {
            setNewComment('')
            setSuccessful(true)
            handleDataLoading()
        }, (error) => {
            const rMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            setSuccessful(false)
            setMessage(rMessage)
        })

    }
    const deletecomment = async (e) => {
        await Commentservice.deleteComment(e)
        handleDataLoading()

    }
    const likeProject = async (e) => {
        await ProjectService.likeProjectById(e)
        handleDataLoading()
    }
    const unLikeProject = async (e) => {
        await ProjectService.unLikeProjectById(e)
        handleDataLoading()

    }
    return (
        <div className="project-page-section">
            <div className="project-page-wrapper">
                {project && <div className="project-page-content">
                    <div className="project-page-content-header">
                        <h5>{project.title}</h5>
                    </div>
                    <div className="project-page-content-description">
                        <p><strong>Description: </strong>{project.description}</p>
                        <p><strong>Members: </strong>{project.members}</p>
                        <p><strong>Technologies: </strong>{project.technologies}</p>
                        <p><strong>Author: </strong>{project.user.username}</p>
                        <p><strong>Posted: </strong>{project.createdAt.slice(0, 10)}</p>
                    </div>
                    {user ? <div className="project-social-controllers">
                        {project.likes.includes(user.username) ?
                            <div className="like-badge" style={{
                                boxShadow: 'inset 0px 0px 3px white'
                            }} onClick={() => { unLikeProject(project._id) }}>
                                <BiLike />{project.likes.length}</div> :
                            <div className="like-badge" style={{ color: 'var(--primary-dark)', background: 'white', boxShadow: '0px 0px 2px var(--primary-dark)' }} onClick={() => { likeProject(project._id) }}><BiLike /> {project.likes.length}</div>}
                    </div> :
                        <div className="like-badge" style={{
                            boxShadow: 'inset 0px 0px 3px white'
                        }}><BiLike />{project.likes.length}</div>}

                    <div className="project-page-content-comments">
                        <h5>comments</h5>
                        <div className="project-page-comment">
                            {project.comments && project.comments.map((comment, index) => (
                                <div key={index} className="comment" ref={commentRef} style={{
                                    background:
                                        index % 2 === 0
                                            ? "rgba(0,0,100, 0.1)"
                                            : "rgba(4, 85, 133, 0.1)",
                                }}>
                                    <div className="comment-body">
                                        <div className="comment-text"><p>{comment.text}</p></div>
                                        <div className="comment-creator">
                                            <p><strong>author: </strong>{comment.user.username} </p><p><strong>created: </strong>{comment.createdAt.slice(0, 10)} at {comment.createdAt.slice(11, 19)}</p>
                                        </div>
                                    </div>{user ?
                                        <div className="comment-delete">  {comment.user.username === user.username && <div className='deleteBtn' onClick={() => deletecomment(comment._id)}><FaRegTimesCircle /></div>}
                                        </div> : <></>}
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="project-page-comment-controller">
                        {!user ? 'Login for commenting' : <form onSubmit={handleSumbitComment} >
                            <textarea className='input-bar' type="text" value={newComment} onChange={handleNewComment} required={true} name='text' placeholder='Insert comment' cols={5} /> <button className='commentBtn' >Comment</button>
                            {message && (
                                <div className="form-group">
                                    <div
                                        className={
                                            successful
                                                ? "alert alert-success"
                                                : "alert alert-danger"
                                        }
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                </div>
                            )}    </form>}
                    </div>
                </div>}
            </div>
        </div >
    )
}

export default Project
