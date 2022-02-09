import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import setColorsValues from "./util/helpers/colorValuesSetter";
import getLocalStorage from "./util/helpers/getLocalStorage";
import { colors } from "./constants/colors.constant";

if (getLocalStorage("theme")) {
  setColorsValues(colors[getLocalStorage("theme")]);
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
);
