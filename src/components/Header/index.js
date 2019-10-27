import React from "react";
import "./style.css"


function Header(props) {

    return (

        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand">Rick & Morty Clicky Game</a>
            <div className="justify-content-center">Don't Click the Same Pic Twice!</div>
            <form className="form-inline">
            <span>Score: {props.score} | High Score: {props.highScore}</span>
            </form>
        </nav>

    )

}


export default Header; 