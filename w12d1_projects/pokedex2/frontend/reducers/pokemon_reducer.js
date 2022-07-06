import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  console.log(action)
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_POKEMON:
    nextState[action.payload.pokemon.id] = action.payload.pokemon; // is that right ID call?
    return nextState;
    // as opposed to
    //return action.payload.pokemon
    //or
    // nextState = {}
    // let pokemon1 = action.payload.pokemon
    // nextState[pokemon1.id] = pokemon1
    // return nextState
  default:
    return state;
  }
}
  
export default pokemonReducer;
