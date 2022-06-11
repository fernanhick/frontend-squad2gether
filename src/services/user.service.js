import axios from 'axios'
// Import the auth-header.js so we can use whenever there is any access that requires authorization
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/test/'
const API_URL_USER = 'http://localhost:8080/api/v1/user/'

// Get the public content hitting the URL without any auth-header
const getPublicContent = () => {
    return axios.get(API_URL + 'all')
}
// GET request to the user board endpoint and adding the body for authentication
const getUserBoard = () => {
    return axios.get(API_URL + 'user', { headers: authHeader() })
}
const getModeratorBoard = () => {
    return axios.get(API_URL + 'moderator', { headers: authHeader() })
}
const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', { headers: authHeader() })
}

const getUserById = (id) => {
    return axios.get(API_URL_USER + id)
}
// Wrapp all the functions as methodds in the UserService object.
const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
    getUserById,
}
export default UserService
