import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

export const NavBar = () => {
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
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">
                        SquadHunt
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/home"}>
                                Home
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
                    </div>
                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
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
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
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
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};
