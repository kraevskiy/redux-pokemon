import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/rootReducer";
import reduxThunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

const app = <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
</React.StrictMode>

ReactDOM.render(
  app,
  document.getElementById('root')
);
