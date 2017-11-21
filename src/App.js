import React, { Component } from 'react'
import {connect} from 'react-redux'
import logo from './logo.png'
import HiddenText from './components/HiddenText'
import Alphabet from './components/Alphabet'
import Hangman from './components/Hangman'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      guesses: [],
      lives: 7
    }
  }

  checkLetter(letter) {
    const {guesses, lives} = this.state
    const {text} = this.props

    if (lives > 0) {
      this.setState({
        guesses: [...guesses, letter],
        lives: text.toLowerCase().indexOf(letter) > -1 ? lives : lives -1
      })
    }
  }

  render() {
    const {guesses, lives} = this.state
    const {question, text} = this.props

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

function mapStateToProps({question, text}) {
  return {question, text}
}

export default connect(mapStateToProps)(App)
