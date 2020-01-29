// Practice React with components
import React, {Component} from 'react';
import './styles.css';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

export default class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]

  };

  // player id counter
  prevPlayerId = 4;

   hangleScoreChange = (index, delta) => {
      this.setState( prevState => ({
          score: prevState.players[index].score += delta
      }));
     console.log('index: ' + index, 'delta: ' + delta)
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

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
        <Header
        title="Scoreboard"
        players={this.state.players}/>

        {this.state.players.map( (players, index) =>
          <Player
          name={players.name}
          score={players.score}
          id={players.id}
          key={players.id.toString()}
          index={index}
          changeScore={this.hangleScoreChange}
          removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
    </div>
    );
  }
}
