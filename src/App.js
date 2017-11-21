import React, { Component } from 'react';
import logo from './logo.png';
import HiddenText from './components/HiddenText'
import Alphabet from './components/Alphabet'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: "The favourite food of Ali",
      text: "Soy beans"
    }
  }

  checkLetter(letter) {
    console.log(letter)
  }

  render() {
    const {question, text } = this.state

    return (
      <div>
          <img src={logo} alt="H8ful Hangman" />
          <HiddenText question={question} text={text} />
          <Alphabet onLetterClick={this.checkLetter.bind(this)}/>
      </div>
    )
  }
}

export default App;
