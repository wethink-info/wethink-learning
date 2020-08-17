import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "../src/assets/css/index.css";
// SETTING UP REDUX STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./store/reducers/index.js";

// ENHANCING STORE WITH FIREBASE
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "./services/firebase";

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore
);
const store = createStoreWithFirebase(
  reducers,
  {},
  applyMiddleware(reduxThunk, logger)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app,document.getElementById("root"));