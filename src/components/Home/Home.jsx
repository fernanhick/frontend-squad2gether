import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ProjectService from "../../services/project.service";
/* import UserService from "../../services/user.service";
 */
import("./styles.css");
const search = require("../../images/search.png");
const create = require("../../images/create.png");
const connect = require("../../images/connect.png");
const heroImage = require("../../images/hero-team.jpg");
const Home = () => {
    const { ref: myRef, inView: wrapperVisible } = useInView();
    const { ref: descRef, inView: descVisible } = useInView();

    //   const [content, setContent] = useState("");
    const [projects, setProjects] = useState("");
    useEffect(() => {
        /*    UserService.getPublicContent().then(
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
        ); */

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
                <span className="star"></span>
                <div
                    ref={myRef}
                    className={`hero-wrapper ${
                        wrapperVisible ? "showSection" : ""
                    }`}
                >
                    {" "}
                    <div className="wrap-header">
                        {" "}
                        <div className="left-side">
                            <img src={heroImage} alt="" />
                        </div>
                        <div className="right-side">
                            {" "}
                            <h1>Welcome to SquadHunt</h1>
                            <hr
                                className={`${wrapperVisible ? "showHr" : ""}`}
                            />
                            <h4 className="heading-header">
                                Search, Find and Connect with other members and
                                start your Project today!
                            </h4>
                            <p className="heading-header">
                                Look for any of the topics you are interested
                                and check the project proposal posted by other
                                users.
                            </p>{" "}
                            <p className="heading-header">
                                Find new opportunities and collaborate with
                                people with the same goal.
                            </p>{" "}
                            <p className="heading-header">
                                In SquadHunt you will be able to connect and
                                begin the journey
                            </p>
                            <div
                                className={` ${
                                    wrapperVisible ? "showStartButton" : ""
                                }`}
                            >
                                <Link className="register-btn" to={"/register"}>
                                    Start Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="description-container" ref={descRef}>
                <div
                    className={`description-content ${
                        descVisible ? "showSearch" : ""
                    }`}
                >
                    <h3>Search</h3>
                    <img src={search} alt="search for others" />
                </div>
                <div
                    className={`description-content ${
                        descVisible ? "showCreate" : ""
                    }`}
                >
                    <h3>Create</h3> <img src={create} alt="create posts" />
                </div>
                <div
                    className={`description-content ${
                        descVisible ? "showConnect" : ""
                    }`}
                >
                    <h3>Connect</h3>{" "}
                    <img src={connect} alt="connect with others" />
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
            <footer>
                <a href="https://www.freepik.com/vectors/laptop-cartoon">
                    Laptop cartoon vector created by jcomp - www.freepik.com
                </a>
            </footer>
        </div>
    );
};

export default Home;
