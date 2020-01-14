// Practice React with components

import React from 'react';
import './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayer={1}/>
        <Players />
    </div>
    );
  }
}

const Header = (props) => {
  console.log(props)
  return(
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayer}</span>

    </header>
  );
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
