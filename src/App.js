// Practice React with components

import React from 'react';
import './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayer={1}/>

        <Players name="Guil" score={50}/>
        <Players name="Jose" score={30}/>
        <Players name="Anna" score={40}/>
        <Players name="Mimi" score={20}/>
        <Players name="Yoz" score={10}/>
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

const Players = (props) => {
  return(
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return(
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action decrement"> + </button>
    </div>
  );
}
