import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Game from "./components/Game"
import Wrapper from "./components/Wrapper"
import GameCard from "./components/GameCard"
import characters from "./characters.json"


class App extends Component {

  state = {
    characters,
    score: 0,
    highScore:0
  }

clickCount = id => {}

  render() {
    return (

      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}/>
        <Game>
        {this.state.characters.map(character => (
        <GameCard 
          clickCount={this.clickCount}
          id={character.id}
          key={character.name}
          image={character.image}
        />
        ))}
        </Game>
      </Wrapper>

    );
  }
}

export default App;
