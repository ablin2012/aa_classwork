import { RECEIVE_POKEMON } from "../actions/pokemon_actions";

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POKEMON:
        let items = action.payload.items;
        return items;
    default:
        return state;
  }
}

export default itemsReducer;