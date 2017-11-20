import React, { Component } from 'react';
import logo from './logo.png';
import HiddenText from './components/HiddenText'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: "The favourite food of Ali",
      text: "Soya beans"
    }
  }
  render() {
    const {question, text } = this.state

    return (
      <div>
          <img src={logo} alt="H8ful Hangman" />
          <HiddenText question={question} text={text} />
      </div>
    );
  }
}

export default App;
