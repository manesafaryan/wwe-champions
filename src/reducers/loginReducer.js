import {LOGIN, LOGOUT} from "../actions/constants"

let initialState = false ;

export default function loginReducer(state = initialState, action) {
  if (action.type === LOGIN) {
    return true ;
  } else if (action.type === LOGOUT) {
    return false ;
  }

  return state;
}
