import React from "react";

function About(props) {
    return (
        <div className="about">
            <h1>About</h1>
            <p>{props.data}</p>
        </div> 
    );
}

export default About;