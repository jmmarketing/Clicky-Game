import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Game from "./components/Game"
import Wrapper from "./components/Wrapper"
import GameCard from "./components/GameCard"
import characters from "./characters.json"


class App extends Component {



  render() {
    return (

      <Wrapper>
        <Header />
        <Game />
        <GameCard />

      </Wrapper>

    );
  }
}

export default App;
