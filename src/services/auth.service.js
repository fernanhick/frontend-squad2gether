import axios from "axios";
// The API url where we will be doing our http requests
const API_URL = "http://localhost:8080/api/v1/auth/";

// REGISTER functionality
const register = (username, email, password) => {
    // Do a post request to the server passing the username, email and password
    return axios.post(API_URL + "signup", { username, email, password });
};
const login = (username, password) => {
    // Do a post request passing the username and password and then if the response body have a data.accessToken then we store this in the local storage
    return axios
        .post(API_URL + "signin", { username, password })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};
// Logout function will do is remove the item user from local storage
const logout = () => {
    localStorage.removeItem("user");
};

// Get current user function for obtaining the information from the response data
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

// Create and object including the different methods for exporting
const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;
