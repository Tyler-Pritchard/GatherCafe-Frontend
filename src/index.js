import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import {
  Provider
} from "react-redux";
import {
  fetchItems
} from "./redux/actions/items";
import {
  fetchMenus
} from "./redux/actions/menus";
import store from "./redux/store";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
)

const newStore = store();
newStore.dispatch(fetchItems());
newStore.dispatch(fetchMenus());

ReactDOM.render( <
  Provider store = {
    newStore
  } >
  <
  App / >
  <
  /Provider>,

  document.getElementById("root")
);