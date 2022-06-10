import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css";
const SideBar = () => {
    const [sideBarOpen, setSidebarOpen] = useState(false);
    const handleToggle = () => {
        setSidebarOpen(!sideBarOpen);
    };

    return (
        <div className={`sidebar ${!sideBarOpen ? "hidden" : ""}`}>
            <div
                className={`toggle-btn ${!sideBarOpen ? "turn-arrow" : ""}`}
                onClick={handleToggle}
            >
                <BsFillArrowLeftCircleFill />
            </div>

            <Link to={"/create"}>Create</Link>
        </div>
    );
};

export default SideBar;
