import React from 'react';

import PlayedCard from './PlayedCard/PlayedCard';

import './PlayArea.css';

export default function PlayArea({ history, nickname }) {
  return (
    <div>
      {history.map((card, i) => (
        <div key={i}><PlayedCard card={card} nickname={nickname}/></div>)
      )}
    </div>
  )
}
