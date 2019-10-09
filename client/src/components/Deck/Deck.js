import React from 'react';
import Fist from '../images/fist.png'

import Sword from "../images/sword.png";
import Helm from "../images/helm.png";
import Anubis from "../images/anubis.png";
import Book from "../images/book.png";

import './Deck.css';

const generateCard = function () {
  const possibleWeapons = [
    { type: Sword, cardName: 'SWORD', styles: 'red-bg', description: 'Sword beats Helm!' },
    { type: Helm, cardName: 'HELM', styles: 'blue-bg', description: 'Helm beats Book!' },
    { type: Anubis, cardName: 'ANUBIS', styles: 'green-bg', description: 'Anubis beats ALL!' },
    { type: Book, cardName: 'BOOK', styles: 'gold-bg', description: 'Book beats Sword!' }];
  const card = [possibleWeapons[Math.floor(Math.random() * Math.floor(4))]];
  return card;
}

const Deck = ({ sendCard }) => (
    <div onClick={e => sendCard(e, generateCard())} className="deck">
      <img className="deckImage" src={Fist} style={{ zIndex: 1 }}></img>
      <div className="deckText" style={{ zIndex: -1 }}>
        COMBATCARDSCOMBATCARDSCOMBATCOMBATCARDSCOMBATCARDSCOMBAT
      </div>
    </div>
)

export default Deck;