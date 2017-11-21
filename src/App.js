import React, { Component } from 'react'
import {connect} from 'react-redux'
import logo from './logo.png'
import HiddenText from './components/HiddenText'
import Alphabet from './components/Alphabet'
import Hangman from './components/Hangman'
import {decrementLives, guessLetter, fetchData} from './actions'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData())
  }
  
  checkLetter(letter) {
    const {text, lives, dispatch} = this.props

    if (lives === 0) {
      return
    }

    if (text.toLowerCase().indexOf(letter) === -1) {
      dispatch(decrementLives())
    }

    dispatch(guessLetter(letter))
  }


  render() {
    const {question, text, lives, guesses} = this.props

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

function mapStateToProps({question, text, lives, guesses}) {
  return {question, text, lives, guesses}
}

export default connect(mapStateToProps)(App)
