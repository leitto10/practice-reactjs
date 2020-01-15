// Practice React with components

import React from 'react';
import './styles.css';

export default class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]

  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayer={this.state.players.length}/>
        {this.state.players.map( players =>
          <Player
          name={players.name}
          id={players.id}
          key={players.id.toString()}
          removePlayer={this.handleRemovePlayer}
          />
        )}
    </div>
    );
  }
}

// This is the Header Component
const Header = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayer}</span>
    </header>
  );
}

// This is the Player component
const Player = (props) => {
  return(
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
}

// This is the Counter component
class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
        score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
        score: prevState.score - 1
    }));
  }

  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action decrement" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}
