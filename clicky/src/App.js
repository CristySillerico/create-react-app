import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body";
import cards from "./cards.json"
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Cards from "./components/Cards";

class App extends Component {

  state = {
    cards: cards,
    currentScore: 0,
    highScore: 0,
    message: "Click and image to begin!"
    
  }
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = randomFriends(friends);
    this.setState({ friends: shuffledFriends });
    
  // handleClick = id => {
  //   //cycle through and find the card with the id that is passes through
  //   //you have to see if its clicked on
  //   //if clicked then tells them they loose
  //   //reset the cards
  //   //if it hasnt been clicked on then it increase score, reshuffle and add property to the on that has been clicked on and set property to the one that has been clicked on to true

  }

  render() {
    return (
      <div>
        <Header
          message={this.state.message}
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}

        />
        <Jumbotron />
        <Body 
          cards={this.state.cards}
          handleClick={this.handleClick}

        
        />
      </div>
    )
  }
}
export default App;
