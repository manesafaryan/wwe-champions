import { createStore, combineReducers } from "redux";
import themeReducer from "../reducers/themeReducer";
import loginReducer from "../reducers/loginReducer";
import userReducer from "../reducers/userReducer"

let rootReducer = combineReducers({
  isLogedin: loginReducer,
  theme: themeReducer,
  currentUser: userReducer
});

export const store = createStore(rootReducer);
