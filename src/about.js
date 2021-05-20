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
                        I am a Front End JavaScript Developer,
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
                        Want to know more ?
                        <span className="resume">
                            <a href="/contact"> get in touch!</a>
                        </span>
                    </span>
                </h1>
            </div>
            <Footer about home />
        </div>
    );
}
