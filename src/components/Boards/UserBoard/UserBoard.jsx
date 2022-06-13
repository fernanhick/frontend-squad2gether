import React, { useEffect } from "react";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import UserProjects from './components/UserProjects/UserProjects';
import './styles.css'
const UserBoard = () => {
    useEffect(() => {

    }, []);

    return (
        <div className="user-board-section">
            <div className="user-board">
                <UserProjects />
                <CreateBoard />
            </div>
        </div>
    );
};

export default UserBoard;
