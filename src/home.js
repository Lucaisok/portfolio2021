import "./App.css";
import TickerContainer from "./ticker";
import Footer from "./footer";

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="namer"></div>
                <div className="namerMobile">
                    <h1>Luca</h1>
                    <h1>Tomarelli</h1>
                </div>
                <div className="middleLine">
                    <div className="leftTitle">
                        <h4 className="subTitle" style={{ marginBottom: -20 }}>
                            Full Stack
                        </h4>
                        <h4 className="subTitle" style={{ marginTop: -30 }}>
                            Developer
                        </h4>
                    </div>
                    <div className="gifAndCover">
                        <iframe
                            title="gif"
                            src="https://giphy.com/embed/WsGR0wXzcCY00HJX1a"
                            width="480"
                            height="480"
                            frameBorder="0"
                            className="giphy-embed"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="rightTitle">
                        <h4 className="subTitle" style={{ marginBottom: -20 }}>
                            Based
                        </h4>
                        <h4 className="subTitle" style={{ marginTop: -30 }}>
                            inBerlin
                        </h4>
                    </div>
                </div>
                <div className="mobileMiddleLine">
                    <div className="horizontalContainer">
                        <h1 className="frontend" style={{ marginRight: -54 }}>
                            Full Stack
                        </h1>
                        <div className="verticalContainer">
                            <h1 style={{ marginBottom: 0 }}>Developer</h1>
                            <iframe
                                title="gif"
                                src="https://giphy.com/embed/WsGR0wXzcCY00HJX1a"
                                width="480"
                                height="480"
                                frameBorder="0"
                                className="giphy-embed"
                                allowFullScreen
                            ></iframe>
                            <h1 style={{ marginTop: 0 }}>Berlin</h1>
                        </div>
                        <h1 className="based" style={{ marginLeft: -46 }}>
                            BasedIn
                        </h1>
                    </div>
                </div>
                <TickerContainer />
                <Footer home />
            </header>
        </div>
    );
}
