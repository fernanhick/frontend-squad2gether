import React, { useEffect } from "react";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import UserProjects from './components/UserProjects/UserProjects';
import './styles.css'
const UserBoard = () => {
    useEffect(() => {

    }, []);

    return (
        <div className="user-board">
            <CreateBoard />
            <UserProjects />
        </div>
    );
};

export default UserBoard;
