import {createStore} from 'redux'

const initialState = {
  question: "The Prophet Muhammad said: ... is good for fever, when cooked in a form of soup.",
  text: "Barley",
  guesses: [],
  lives: 7
}

function reducer(state = initialState, action) {
  if (action.type === 'DECREMENT_LIVES') {
    const {lives} = state
    return {...state, lives: lives -1}
  }
  
  return state
}

export default createStore(reducer)
