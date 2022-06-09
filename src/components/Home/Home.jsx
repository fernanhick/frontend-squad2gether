import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import ProjectService from "../../services/project.service";
/* import UserService from "../../services/user.service";
 */
import("./styles.css");
const search = require("../../images/search.png");
const create = require("../../images/create.png");
const connect = require("../../images/connect.png");
const heroImage = require("../../images/hero-team.jpg");
const Home = () => {
    const { ref: myRef, inView: wrapperVisible } = useInView({
        triggerOnce: true,
    });
    const { ref: descRef1, inView: descVisible1 } = useInView({
        triggerOnce: true,
    });
    const { ref: descRef2, inView: descVisible2 } = useInView({
        triggerOnce: true,
    });
    const { ref: descRef3, inView: descVisible3 } = useInView({
        triggerOnce: true,
    });
    const { ref: proRef1, inView: projectDesc1 } = useInView({
        triggerOnce: true,
    });
    const { ref: topPage, inView: topVisible } = useInView();
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
                console.log(response.data);
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
        <div className="home-page">
            <div className="top-page" ref={topPage}></div>
            <div className={`up-button ${!topVisible ? "show-up-btn" : ""}`}>
                <a href="#">
                    <FaArrowAltCircleUp />
                </a>
            </div>
            <section className="hero-section">
                <div
                    ref={myRef}
                    className={`hero-wrapper ${
                        wrapperVisible ? "showSection" : ""
                    }`}
                >
                    {" "}
                    <div className="wrap-header">
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
                                begin the journey for project of your dreams.
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
            <section className="description-container">
                <div
                    className={`description-content ${
                        descVisible1 ? "showSearch" : ""
                    }`}
                    ref={descRef1}
                >
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    <span className="line4"></span>{" "}
                    <div className="desc-wrap">
                        <h3>Search</h3>

                        <img src={search} alt="search for others" />
                        <p>
                            Search for projects posted based on your topic of
                            interest and see if your skills match what is
                            needed.
                        </p>

                        <Link to={"/projects"} className="desc-button">
                            Go there
                        </Link>
                    </div>
                </div>
                <div
                    className={`description-content ${
                        descVisible2 ? "showCreate" : ""
                    }`}
                    ref={descRef2}
                >
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    <span className="line4"></span>{" "}
                    <div className="desc-wrap">
                        <h3>Create</h3> <img src={create} alt="create posts" />
                        <p>
                            Create new posts for projects you want to build up
                            and find members for your squad.
                        </p>
                        <Link to={"/login"} className="desc-button">
                            Go there
                        </Link>
                    </div>
                </div>

                <div
                    className={`description-content ${
                        descVisible3 ? "showConnect" : ""
                    }`}
                    ref={descRef3}
                >
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    <span className="line4"></span>
                    <div className="desc-wrap">
                        <h3>Connect</h3>{" "}
                        <img src={connect} alt="connect with others" />
                        <p>
                            Connect with other users and be part of the squad to
                            begin working in the project of your dreams
                        </p>
                        <Link to={"/register"} className="desc-button">
                            Go there
                        </Link>
                    </div>
                </div>
            </section>
            <section className="projects-section">
                <div className="projects-section-header">
                    {/*                     <h1>Projects</h1>
                     */}{" "}
                </div>
                <div
                    className={`projects-body flex ${
                        projectDesc1 ? "showSection" : ""
                    }`}
                    ref={proRef1}
                >
                    <div className="projects-body-left">
                        <h2>Search for projects posted</h2>
                        <hr />
                        <p>
                            Look through all the projects posted by other
                            members in{" "}
                            <Link className="links" to={"/projects"}>
                                {" "}
                                here
                            </Link>{" "}
                            and find the desired topic you are interest in.
                        </p>
                        <p>
                            <Link className="links" to={"/projects"}>
                                Register
                            </Link>{" "}
                            today if you want to start searching for other users
                            with the same goal as you for collaboration and
                            begin the journey you always wanted for your
                            entrepreneurship.
                        </p>
                    </div>
                    <div className="projects-body-right">
                        {/*                         <h3>Latest Projects posted</h3>
                         */}{" "}
                        {projects ? (
                            projects.slice(-4).map((project, index) => (
                                <div
                                    className="project"
                                    key={index}
                                    style={{
                                        background:
                                            index % 2 === 0
                                                ? "var(--primary-dark)"
                                                : "rgb(4, 85, 133)",
                                    }}
                                >
                                    <div className="project-body">
                                        <h5 className="project-title">
                                            {project.title}
                                        </h5>
                                        <div className="project-description">
                                            <div className="project-desc">
                                                {" "}
                                                <strong>Description: </strong>
                                                <span>
                                                    {project.description}
                                                </span>
                                            </div>
                                            <div className="project-tech">
                                                <strong>Technologies: </strong>
                                                <span>
                                                    {project.technologies.join(
                                                        ", "
                                                    )}
                                                </span>
                                            </div>{" "}
                                            <div className="project-memb">
                                                <strong>Members: </strong>
                                                <span>
                                                    {project.members.join(", ")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>No projects</>
                        )}
                    </div>
                </div>
            </section>
            <section className="create-section">
                <div className="create-section-wrapper">
                    <div className="create-section-left"></div>
                    <div className="create-section-right"></div>{" "}
                </div>
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
