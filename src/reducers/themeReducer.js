import { LIGHT, DARK } from "../actions/constants";
import getLocalStorage from "../util/helpers/getLocalStorage";

let theme = getLocalStorage("theme") ? getLocalStorage("theme") : DARK;
let initialState = theme ;

export default function themeReducer(state = initialState, action) {
  if (action.type === LIGHT) {
    return LIGHT ;
  } else if (action.type === DARK) {
    return DARK ;
  }
  return state;
}
