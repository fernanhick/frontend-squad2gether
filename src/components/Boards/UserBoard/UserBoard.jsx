import React, { useEffect } from "react";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import UserProjects from './components/UserProjects/UserProjects';
import './styles.css'
const UserBoard = () => {
    useEffect(() => {

    }, []);

    return (
        <div className="user-board-section">
            <div className="user-board">            <div className="user-board-header"><h1>dashboard</h1></div>

                <UserProjects />
                <CreateBoard />
            </div>
        </div>
    );
};

export default UserBoard;
