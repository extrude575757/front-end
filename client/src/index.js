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
import Nav from "./components/navbar/Nav"
import CardAdd from "./components/CardAdd";
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
    <div key="2"  className="App">
      <Nav key="3" />
      <Title key="4" />
      <List key="5" />
      <CardAdd key="6" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider key="0" store={store}>
    <App key="1" />
  </Provider>,
  rootElement
);
