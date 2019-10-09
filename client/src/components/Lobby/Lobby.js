import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Fist from '../images/fist.png'
import "typeface-black-ops-one";

import './Lobby.css';

export default function Lobby() {
  const [nickname, setNickname] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="lobbyContainer">
      <div className="lobbyInnerContainer">
        <h1 className="combatCardsTitle">COMBAT CARDS</h1>
        <input placeholder="👤Name" className="lobbyInput" type="text" onChange={(event) => setNickname(event.target.value)} />
        <input placeholder="🚪Room" className="lobbyInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        <Link onClick={e => (!nickname || !room) ? e.preventDefault() : null} to={`/game?nickname=${nickname}&room=${room}`}>
          <button className="joinButton mt-20" type="submit">
            <div className="fireRing mt-20">
              <img className="fistImage" src={Fist} alt="fist" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}