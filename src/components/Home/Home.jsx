import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ProjectService from "../../services/project.service";
import UserService from "../../services/user.service";

import("./styles.css");
const heroImage = require("../../images/hero-team.jpg");
const Home = () => {
    const { ref: myRef, inView: wrapperVisible } = useInView();
    const { ref: myBtnStart, inView: startBtnVisible } = useInView();
    const [content, setContent] = useState("");
    const [projects, setProjects] = useState("");
    useEffect(() => {
        UserService.getPublicContent().then(
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

        ProjectService.getProjects().then(
            (response) => {
                setProjects(response.data);
            },
            (error) => {
                const _project =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    (error.message && error.toString());
                setProjects(_project);
            }
        );
    }, []);
    return (
        <div>
            <section className="hero-section">
                <div
                    ref={myRef}
                    className={`hero-wrapper ${
                        wrapperVisible ? "showSection" : ""
                    }`}
                >
                    <div className="wrap-header">
                        <div className="left-side">
                            <img src={heroImage} alt="" />
                        </div>
                        <div className="right-side">
                            <h1>Welcome to SquadHunt</h1>
                            <p>
                                Search, Find and Connect with other members and
                                start your Project today!
                            </p>
                            <p>
                                Look for any of the topics you are interested
                                and check the project proposal posted by other
                                user's
                            </p>
                            <div
                                className={` ${
                                    startBtnVisible ? "showStartButton" : ""
                                }`}
                                ref={myBtnStart}
                            >
                                <Link className="register-btn" to={"/register"}>
                                    Start Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects-container">
                {projects ? (
                    projects.slice(-5).map((project, index) => (
                        <div className="project" key={index}>
                            <div className="project-body">
                                <h5
                                    className="project-title"
                                    style={{
                                        background:
                                            index % 2 === 0
                                                ? "rgb(10, 200, 200)"
                                                : "rgb(140, 240, 240)",
                                    }}
                                >
                                    {project.title}
                                </h5>
                                <hr />
                            </div>
                        </div>
                    ))
                ) : (
                    <>No projects</>
                )}
            </section>
        </div>
    );
};

export default Home;
