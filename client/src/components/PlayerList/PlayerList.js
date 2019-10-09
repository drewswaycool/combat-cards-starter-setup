import React from 'react';

import './PlayerList.css';

export default function PlayerList ({ users }) {
  return (
    <div className="listContainer">
      { users ? (
        <div>
          <h1>Players:</h1>
          <div className="playerContainer">
            <h2>
              {users.map(({nickname}) => (
                <div key={nickname} className="player">
                  <span className="onlineDot"></span>
                  {nickname}
                </div>
              ))}
            </h2>
          </div>
        </div>
        ) : null }
    </div>
  )
}