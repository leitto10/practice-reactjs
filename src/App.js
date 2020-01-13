import React from 'react';

import './App.css';

export default class App extends React.Component {
  render() {

    return (
      <div className="App">
      
        <h1>Score Board</h1>
        <span className="stats">Players: 1</span>
        <Players />

    </div>
    );
  }
}

const Players = () => {
  return(
    <div className="player">
      <span className="player-name">
        Jose
      </span>
      <Counter />
    </div>
  );
}

const Counter = () => {
  return(
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action decrement"> + </button>
    </div>
  );
}
