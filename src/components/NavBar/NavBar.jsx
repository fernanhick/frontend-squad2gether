import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    const [showModBoard, setShowModBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            // If there is a user, then check if this user have a moderator role included in the user.roles, same for the admin role
            setCurrentUser(user);
            setShowModBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);
    const logOut = () => {
        AuthService.logout();
    };

    return (
        <nav className="navbar navbar-expand-lg  navbar-dark sticky-top">
            {" "}
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <span> SquadHunt</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/home"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/projects"}>
                                Projects
                            </Link>
                        </li>
                        {showModBoard && (
                            <li className="nav-item">
                                <Link className="nav-link" to={"/mod"}>
                                    Moderator Board
                                </Link>
                            </li>
                        )}
                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link className="nav-link" to={"/admin"}>
                                    Admin Board
                                </Link>
                            </li>
                        )}
                        {currentUser && (
                            <li className="nav-item">
                                <Link className="nav-link" to={"/user"}>
                                    User Board
                                </Link>
                            </li>
                        )}
                    </ul>
                    {currentUser ? (
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/profile"}>
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/login"
                                    onClick={logOut}
                                    className="nav-link"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/register"}>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
