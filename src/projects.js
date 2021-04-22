import "./App.css";
import Footer from "./footer";
import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    const handleClick = (e, idx) => {
        e.preventDefault();
        e.stopPropagation();
        for (let i = 0; i < projects.length; i++) {
            if (idx === projects[i].id) {
                let projectClicked = projects[i];
                projectClicked.flippato
                    ? (projectClicked.flippato = false)
                    : (projectClicked.flippato = true);
                setProjects([...projects]);
            }
        }
    };

    const getInfo = (e, idx) => {
        e.preventDefault();
        e.stopPropagation();
        for (let j = 0; j < projects.length; j++) {
            if (idx === projects[j].id) {
                let projectSelected = projects[j];
                projectSelected.modal = true;
                setProjects([...projects]);
            }
        }
    };

    const closeModal = (e, idx) => {
        e.preventDefault();
        e.stopPropagation();
        for (let j = 0; j < projects.length; j++) {
            if (idx === projects[j].id) {
                let projectDeselected = projects[j];
                projectDeselected.modal = false;
                setProjects([...projects]);
            }
        }
    };

    useEffect(() => {
        (async () => {
            const response = await fetch("./projects.json");
            if (!response) {
                console.log("error");
            }
            const data = await response.json();
            setProjects(data);
            console.log(data);
        })();
    }, []);

    return (
        <div className="projectsContainer">
            <h1 className="projectsTitle">Projects</h1>
            <div className="cardsContainer">
                {projects &&
                    projects.map((project, idx) => {
                        return (
                            <ReactCardFlip
                                isFlipped={project.flippato ? true : false}
                                flipDirection="horizontal"
                                key={idx}
                            >
                                <div
                                    className="backCard"
                                    onClick={(e) => handleClick(e, idx)}
                                >
                                    <h1 style={{ color: "white" }}>
                                        {project.name}
                                    </h1>
                                </div>
                                <div
                                    className="card"
                                    key={idx}
                                    onClick={(e) => handleClick(e, idx)}
                                >
                                    <div
                                        className="imageContainer"
                                        style={{
                                            backgroundImage: `url(${project.img})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }}
                                        onClick={(e) => handleClick(e, idx)}
                                    ></div>
                                    <div className="desBoxContainer">
                                        <div className="desBox">
                                            <p style={{ marginBottom: 0 }}>
                                                <strong>
                                                    {project.smallDes}
                                                </strong>
                                            </p>
                                            <div className="front">
                                                <p>
                                                    <strong>Frontend:</strong>
                                                </p>
                                                <p>{project.tech.front}</p>
                                            </div>
                                            <div className="back">
                                                <p>
                                                    <strong>Backend:</strong>
                                                </p>
                                                <p>{project.tech.back}</p>
                                            </div>
                                            <div className="db">
                                                <p>
                                                    <strong>Database:</strong>
                                                </p>
                                                <p>{project.tech.database}</p>
                                            </div>
                                            <div className="buttonsContainer">
                                                <button
                                                    style={{
                                                        backgroundColor:
                                                            project.buttonBgColor,
                                                        color:
                                                            project.buttonColor,
                                                        fontWeight: "bold",
                                                        borderColor:
                                                            project.buttonColor,
                                                        borderWidth: 2,
                                                        borderStyle: "solid",
                                                    }}
                                                    onClick={(e) =>
                                                        getInfo(e, idx)
                                                    }
                                                >
                                                    INFO
                                                </button>
                                                <button
                                                    style={{
                                                        backgroundColor:
                                                            project.buttonBgColor,
                                                        color:
                                                            project.buttonColor,
                                                        fontWeight: "bold",
                                                        borderColor:
                                                            project.buttonColor,
                                                        borderWidth: 2,
                                                        borderStyle: "solid",
                                                    }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        if (
                                                            project.link
                                                                .website !== ""
                                                        ) {
                                                            window.open(
                                                                project.link
                                                                    .website,
                                                                "_blank"
                                                            );
                                                        } else {
                                                            window.open(
                                                                project.link
                                                                    .github,
                                                                "_blank"
                                                            );
                                                        }
                                                    }}
                                                >
                                                    {project.link.website !== ""
                                                        ? "PLAY"
                                                        : "CODE"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        );
                    })}
                {projects &&
                    projects.map((project, idx) => {
                        return (
                            <div
                                key={idx}
                                className="proModal"
                                style={{
                                    display: project.modal
                                        ? "inline-block"
                                        : "none",
                                    borderColor: project.buttonBgColor,
                                }}
                            >
                                <h1>{project.name}</h1>
                                <p
                                    className="x"
                                    onClick={(e) => closeModal(e, idx)}
                                >
                                    <strong>X</strong>
                                </p>
                                <div className="imgContainer">
                                    <div
                                        style={{
                                            backgroundImage: `url(${project.img2})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            borderColor: project.buttonBgColor,
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            backgroundImage: `url(${project.img3})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            borderColor: project.buttonBgColor,
                                        }}
                                    ></div>
                                </div>
                                <div className="desc">
                                    <p>{project.description}</p>
                                </div>
                                <div className="techSpace">
                                    <div className="techies">
                                        <div className="front2">
                                            <p style={{ marginRight: 10 }}>
                                                <strong>Frontend:</strong>
                                            </p>
                                            <p>{project.tech.front}</p>
                                        </div>
                                        <div className="back2">
                                            <p style={{ marginRight: 10 }}>
                                                <strong>Backend:</strong>
                                            </p>
                                            <p>{project.tech.back}</p>
                                        </div>
                                        <div className="db2">
                                            <p style={{ marginRight: 10 }}>
                                                <strong>Database:</strong>
                                            </p>
                                            <p>{project.tech.database}</p>
                                        </div>
                                    </div>
                                    <div className="modalButtonsContainer">
                                        <button
                                            style={{
                                                backgroundColor:
                                                    project.buttonBgColor,
                                                color: project.buttonColor,
                                                fontWeight: "bold",
                                                borderColor:
                                                    project.buttonColor,
                                                borderWidth: 2,
                                                borderStyle: "solid",
                                            }}
                                            onClick={(e) => {
                                                // e.stopPropagation();
                                                e.preventDefault();
                                                window.open(
                                                    project.link.github,
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            CODE
                                        </button>
                                        <button
                                            className={
                                                project.link.website === ""
                                                    ? "noButton"
                                                    : null
                                            }
                                            style={{
                                                backgroundColor:
                                                    project.buttonBgColor,
                                                color: project.buttonColor,
                                                fontWeight: "bold",
                                                borderColor:
                                                    project.buttonColor,
                                                borderWidth: 2,
                                                borderStyle: "solid",
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                window.open(
                                                    project.link.website,
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            PLAY
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </div>
    );
}
