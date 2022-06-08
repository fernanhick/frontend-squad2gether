import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/projects";

const getProjects = () => {
    return axios.get(API_URL);
};

const ProjectService = {
    getProjects,
};

export default ProjectService;
