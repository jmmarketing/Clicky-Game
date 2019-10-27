import React from "react"
import "./style.css"

function GameCard(props) {

    return (
        <div className="card" >
            <img src={props.image} className="card-img-top" alt={props.name} />

        </div>
    )

}


export default GameCard;