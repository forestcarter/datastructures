import React from "react";
import "./Home.css";

export default () => (
    <div className="Home">
        <h2 className="sectionHeader">Don Saguaro's Playground</h2>
        <div className="homeDescriptionContainer">
            <p className="description">
                This is a place for experimentation with new tools and methods.
                Each link in the NavBar is written in{" "}
                <a href="https://www.typescriptlang.org/">Typescript</a> and
                tested with
                <a href="https://jestjs.io//"> Jest</a> and{" "}
                <a href="https://airbnb.io/enzyme/">Enzyme</a>. This site is
                hosted on a Debian Stretch Virtual Machine courtesy of Microsoft
                Azure. NodeJS and Express are used to serve the site. React
				Router handles the routing. HTTPS support courtesy of Certbot.
				CI/CD provided by Buddy.

            </p>
            <img
                className= "saguaros"
                alt="two happy cacti"
                src={`../icons/saguaro.png`}
            />
        </div>
    </div>
);
