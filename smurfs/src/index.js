import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";


const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(<App />, document.getElementById("root"));
