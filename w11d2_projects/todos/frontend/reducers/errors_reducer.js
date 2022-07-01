import { RECEIVE_ERRORS } from "../actions/error_actions";
import { CLEAR_ERRORS } from "../actions/error_actions";

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ERRORS:
          action.errors.forEach((el, idx) => {
            nextState[idx] = el
          })  
          return nextState
        case CLEAR_ERRORS:
          return {}
        default:
            return state;
  }
};

export default errorsReducer;