import {createStore} from 'redux'

const initialState = {
  question: "The Prophet Muhammad said: ... is good for fever, when cooked in a form of soup.",
  text: "Barley",
  guesses: [],
  lives: 7
}

function reducer(state = initialState) {
  return state
}

export default createStore(reducer)
