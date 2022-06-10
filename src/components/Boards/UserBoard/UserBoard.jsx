import React, { useEffect } from "react";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import SideBar from "./components/Sidebar/SideBar";

const UserBoard = () => {
    useEffect(() => {
       
    }, []);

    return (
        <section className="user-board">
{/*             <SideBar />
 */}            <CreateBoard />
        </section>
    );
};

export default UserBoard;
