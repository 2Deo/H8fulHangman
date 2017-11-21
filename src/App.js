import React, { Component } from 'react';
import logo from './logo.png';
import HiddenText from './components/HiddenText'
import Alphabet from './components/Alphabet'
import Hangman from './components/Hangman'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: "The favourite food of Ali",
      text: "Soy beans",
      guesses: [],
      lives: 7
    }
  }

  checkLetter(letter) {
    const {text, guesses, lives} = this.state

    if (lives > 0) {
      this.setState({
        guesses: [...guesses, letter],
        lives: text.toLowerCase().indexOf(letter) > -1 ? lives : lives -1
      })
    }
  }

  render() {
    const {question, text, guesses, lives } = this.state

    return (
      <div>
          <img src={logo} alt="H8ful Hangman" />
          <HiddenText question={question} text={text} guesses={guesses} />
          <Hangman lives={lives}/>
          <Alphabet onLetterClick={this.checkLetter.bind(this)} guesses={guesses}/>
      </div>
    )
  }
}

export default App;
