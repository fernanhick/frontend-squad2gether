import userEvent from '@testing-library/user-event'
import axios from 'axios'
import authHeader from './auth-header'
import AuthService from './auth.service'

const API_URL = 'http://localhost:8080/api/v1/projects/'
const user = AuthService.getCurrentUser()

const postComment = (id, text) => {
    return axios.post(API_URL + id + '/comment', { text: text, user: user.id })
}
const deleteComment = (id) => {
    return axios.delete(API_URL + 'comment/' + id)
}
const Commentservice = {
    postComment,
    deleteComment,
}

export default Commentservice
