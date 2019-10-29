import React from "react"
import "./style.css"

function GameCard(props) {

    return (
        <div className="card mx-2 my-1" onClick={() => props.clickCount(props.id)} >
            <img src={props.image} className="card-img-top" alt={props.name} />

        </div>
    )

}


export default GameCard;