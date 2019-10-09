import React from 'react'

import Card from '../../Card/Card'
import './PlayedCard.css'


export default function PlayedCard({ card, nickname }) {
  let isSentByCurrentUser = false;

  const trimmedName = nickname.trim().toLowerCase();

  if(card && card.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ? (
      <div className="playContainer justifyEnd">
        <p className="sentPlay pr-10">{trimmedName}</p>
        <div className="playBox">
          <Card details={card.cardData} />
        </div>
      </div>
    ) : (
      <div className="playContainer justifyStart">
        <div className="playBox">
          <Card details={card.cardData} />
        </div>
        <p className="sentPlay pl-10 ">{card.user}</p>
      </div>
    )
  );
}