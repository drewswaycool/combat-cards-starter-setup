import React from 'react'
import "typeface-black-ops-one";

import './Card.css'

export default function Card(props) {
  const { details } = props

  return (
    <div className={details.styles}>
      <img className="cardImage" src={details.type}></img>
      <div className="detailWrapper">
        <span className="cardTitle">{details.cardName}</span>
        <p className="cardDescription">{details.description}</p>
      </div>
    </div>
  );
}