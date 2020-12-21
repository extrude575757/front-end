import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import TodoIndex from "./editForm/TodoIndex"
import Title from "./components/Title";
import List from "./components/List";
// import { titleReducer } from "./reducers/titleReducer";
// import { recipesReducer } from "./reducers/recipesReducer";
import rootReducer from "./reducers";

import "./styles.css";
import TodoIndex from "./editForm/TodoIndex";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(`preve state: `, store.getState());
  console.log(`action: `, action);
  next(action);
  console.log("new state: ", store.getState());
  console.groupEnd();
};

const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <div id="0" className="App">
      <Title id="1" />
      <List id="2" />
      <TodoIndex id="5" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider id="3" store={store}>
    <App id="4" />
  </Provider>,
  rootElement
);
