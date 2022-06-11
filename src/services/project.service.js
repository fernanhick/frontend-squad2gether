import axios from "axios";
import authHeader from './auth-header';
import AuthService from './auth.service';

const API_URL = "http://localhost:8080/api/v1/projects/";
const user = AuthService.getCurrentUser()

const getProjects = () => {
    return axios.get(API_URL);
};
const createProject = (title, members, technologies, description)=>{
    
    return axios.post(API_URL,{title, members, technologies, description, user: user.id },  { headers: authHeader() })
}


const ProjectService = {
    getProjects,
    createProject,
    
};

export default ProjectService;
