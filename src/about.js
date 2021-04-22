import "./App.css";
import Footer from "./footer";

export default function About() {
    return (
        <div className="aboutContainer">
            <h1 className="aboutTitle">About</h1>
            <div className="testo">
                <h1 className="hey">
                    <span className="Hey">Hey,</span> <br />
                    <span className="full">
                        I am a Full Stack JavaScript Developer,
                    </span>{" "}
                    <br />
                    <span className="bodyText">
                        that means I design and develop Web and Mobile
                        Applications{" "}
                    </span>{" "}
                    <br />
                    <span className="underBody">
                        that are responsive, functional and appealing.
                    </span>{" "}
                    <br />
                    <span className="under">
                        Want to know more? here is my{" "}
                        <span className="resume">
                            <a
                                href="public/cv.pdf"
                                download="Luca Tomarelli CV.pdf"
                            >
                                resume
                            </a>
                        </span>
                        <br />
                        ...or,{" "}
                        <span className="resume">
                            <a href="/contact">get in touch!</a>
                        </span>
                    </span>
                </h1>
            </div>
            {/* <div className="ball"></div> */}
            {/* <div className="ball2"></div> */}
            {/* <div className="ball3"></div> */}
            <Footer about home />
        </div>
    );
}
