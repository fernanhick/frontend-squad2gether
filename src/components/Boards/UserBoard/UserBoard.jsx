import React, { useState, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Router } from "react-router-dom";
import UserService from "../../../services/user.service";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import SideBar from "./components/Sidebar/SideBar";

const UserBoard = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        UserService.getUserBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);

    return (
        <section className="user-board">
            <SideBar />
            <CreateBoard />
        </section>
    );
};

export default UserBoard;
