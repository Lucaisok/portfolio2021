import React from "react";
import Ticker from "react-ticker";

const TickerContainer = () => (
    <Ticker offset={150}>
        {({ index }) => (
            <>
                <h1 className="ticketText">
                    Hey, I am a Front End Developer, that means I design and
                    develop Web and Mobile Applications that are responsive,
                    functional and appealing. This is my portfolio, check it
                    out!
                </h1>
            </>
        )}
    </Ticker>
);

export default TickerContainer;
