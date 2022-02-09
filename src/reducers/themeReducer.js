import { LIGHT, DARK } from "../actions/constants";
import getLocalStorage from "../util/helpers/getLocalStorage";

let theme = getLocalStorage("theme")
let initialState = { theme };

export default function themeReducer(state = initialState, action) {
  if (action.type === LIGHT) {
    return { theme: LIGHT };
  } else if (action.type === DARK) {
    return { theme: DARK };
  }
  return state;
}
