import { createStore } from "redux";
import themeReducer from "../reducers/themeReducer";
import combineReducers from "redux";

export const store = createStore(themeReducer);
