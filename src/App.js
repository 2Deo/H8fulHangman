import React, { Component } from 'react';
import logo from './logo.png';
import HiddenText from './components/HiddenText'
import Alphabet from './components/Alphabet'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: "The favourite food of Ali",
      text: "Soy beans",
      guesses: []
    }
  }

  checkLetter(letter) {
    const {guesses} = this.state
    this.setState({guesses: [...guesses, letter]})
  }

  render() {
    const {question, text, guesses } = this.state

    return (
      <div>
          <img src={logo} alt="H8ful Hangman" />
          <HiddenText question={question} text={text} guesses={guesses} />
          <Alphabet onLetterClick={this.checkLetter.bind(this)} guesses={guesses}/>
      </div>
    )
  }
}

export default App;
