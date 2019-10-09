import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import ChannelHeader from '../ChannelHeader/ChannelHeader';
import PlayerList from '../PlayerList/PlayerList';
import PlayArea from '../PlayArea/PlayArea';
import Deck from '../Deck/Deck';

import './Game.css';

let socket;

export default function Game({ location }) {
  const [nickname, setNickname] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [cardToPlay, setCardToPlay] = useState('');
  const [playHistory, setPlayHistory] = useState([]);
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { nickname, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setRoom(room);
    setNickname(nickname)

    socket.emit('join', { nickname, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('playerHasPlayed', (cardToPlay) => {
      setPlayHistory([...playHistory, cardToPlay]);
    });

    socket.on('updateVisibleUsers', ({ users }) => {
      setUsers(users);
    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [playHistory])

  const sendCard = (event, generatedCard) => {
    // debugger;
    event.preventDefault();
    // setCardToPlay('hi')

    if (cardToPlay) {
      socket.emit('sendCard', cardToPlay, () => setCardToPlay(''));
    } else {
      socket.emit('sendCard', generatedCard[0], () => setCardToPlay(''));
    }
  }

  return (
    <div className="gameContainer">
      <ChannelHeader room={room} />
      <div className="game">
        <PlayArea history={playHistory} nickname={nickname} />
        <Deck cardToPlay={cardToPlay} setCardToPlay={setCardToPlay} sendCard={sendCard} />
      </div>
      <PlayerList users={users} />
    </div>
  );
}