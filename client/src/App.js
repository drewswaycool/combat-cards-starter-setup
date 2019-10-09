import React from 'react';

import Lobby from './components/Lobby/Lobby'
import Game from './components/Game/Game'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Lobby}/>
      <Route path="/game" component={Game}/>
    </Router>
  );
}

export default App;
