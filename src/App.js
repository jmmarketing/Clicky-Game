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


  componentDidMount(){
    this.setState({characters: this.shuffle(this.state.characters)})
  }; 


  shuffle(array) {
    // Code found here: https://stackoverflow.com/questions/39680997/shuffle-javascript-array
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


clickCount = id => {
  this.state.characters.find((object, index) => {
    if (object.id === id && characters[index].clicked === false){
      characters[index].clicked = true;
      this.setState({score: this.state.score +1});
      this.shuffle(characters);
    } else{
      this.endGame(); 
    }

  })

}

endGame(){
  if (this.state.score > this.state.highScore){
    this.setState({highScore: this.state.score});
    this.state.characters.forEach(character => character.clicked = false);
    this.setState({score: 0}); 
  }
}

  render() {
    return (

      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}/>
        <Game>
        {this.state.characters.map(character => (
        <GameCard 
          clickCount={this.clickCount}
          id={character.id}
          key={character.id}
          image={character.image}
        />
        ))}
        </Game>
      </Wrapper>

    );
  }
}

export default App;
