import axios from 'axios'
import authHeader from './auth-header'
import AuthService from './auth.service'

const API_URL = `${process.env.REACT_APP_HOST}api/v1/projects/`
const user = AuthService.getCurrentUser()

const getProjects = () => {
    return axios.get(API_URL)
}
const createProject = (title, members, technologies, description) => {
    return axios.post(
        API_URL,
        { title, members, technologies, description, user: user.id },
        { headers: authHeader() }
    )
}
const getProjectById = (id) => {
    return axios.get(API_URL + id)
}
const deleteProjectById = (id) => {
    return axios.delete(API_URL + id)
}
const likeProjectById = (id) => {
    return axios.patch(API_URL + 'like/' + id, { username: user.username })
}
const unLikeProjectById = (id) => {
    return axios.patch(API_URL + 'unlike/' + id, { username: user.username })
}

const ProjectService = {
    getProjects,
    createProject,
    getProjectById,
    deleteProjectById,
    likeProjectById,
    unLikeProjectById,
}

export default ProjectService
