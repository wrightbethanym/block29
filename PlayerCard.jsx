import React from "react"
import "./PlayerCard.css"

export default function PlayerCard({player}) {
    const { name, breed, imageUrl}= player;
    return (
        <div className="player-card-container">
            <h2>{name}</h2>
            <img src={imgUrl} alt={`A dog named ${name}`} />
            {team && <h3>{team?.name}</h3>}
            <h3>{breed}</h3>
            <button onClick={() => Navigate(`/players/${id}`)}>See Details</button>
        </div>>
    );
}