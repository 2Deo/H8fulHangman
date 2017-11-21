import {createStore} from 'redux'

const initialState = {
  question: "The Prophet Muhammad said: ... is good for fever, when cooked in a form of soup.",
  text: "Barley",
  guesses: [],
  lives: 7
}

function reducer(state = initialState, action) {
  const {type} = action

  if (type === 'DECREMENT_LIVES') {
    const {lives} = state
    return {...state, lives: lives -1}
  } else if (type === 'GUESS_LETTER') {
    const guesses = [...state.guesses, action.payload]
    return {...state, guesses}
  }

  return state
}

export default createStore(reducer)
