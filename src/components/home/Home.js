import React from "react";
import "./Home.css";

export default () => (
    <div className="Home">
        <h2 className="sectionHeader">Don Saguaro's Playground</h2>
        <div className="homeDescriptionContainer">
            <p className="description">
                This is a place for experimentation with new tools and methods.
                Each link in the NavBar is written in <a href="https://www.typescriptlang.org/"> Typescript </a> and tested with
                <a href="https://jestjs.io//"> Jest </a> and <a href="https://airbnb.io/enzyme/"> Enzyme</a> .{" "}
            </p>
        </div>
    </div>
);
