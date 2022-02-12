import { FAILED_LOGIN, SUCCESS_LOGIN } from "../actions/constants";

let initialState = null;

export default function userReducer(state = initialState, action) {
  if (action.type === SUCCESS_LOGIN) {
    return action.payload
  } else if (action.type === FAILED_LOGIN) {
    return null;
  }
  return state;
}