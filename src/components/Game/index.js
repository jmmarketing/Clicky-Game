import React from "react";
import "./style.css"

function Game(props){


    return (
        <div className = "container">
            <div className ="row justify-content-center">
                 <h1>Testing Connection </h1>
                {props.children}
            </div>

        </div>
    )

}

export default Game;