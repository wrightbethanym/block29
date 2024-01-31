import React, {useEffect, useState} from "react";
import {getPlayers} from "../API/index";
import PlayerCard from "./Playercard/PlayerCard";

export default function AllPlayers() {
    const [players, setPlayers] =useState([]);
    useEffect(())=> {
        async function getPlayerData(){
            try {
                const players = await getPlayers();
                setPlayers(players);
            }catch(err) {
                console.log(err);
            }
        }
        getPlayerData();
    }, []);
  return (
    <div>
      {players.map(puppy)=>(
        <PlayerCard key={puppy.id} player={puppy}/>
      ))}
    </div>
  );
}
