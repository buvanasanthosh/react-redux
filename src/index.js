import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from "react-router";
import {Provider} from "react-redux";
import configureStore from "./stores/main";
import {syncHistoryWithStore, routerMiddleware} from "react-router-redux";
import App from './components/Main';
import routes from './components/routes'


const middleware = routerMiddleware(browserHistory);
const store = configureStore(middleware);
const history = syncHistoryWithStore(browserHistory, store);

const routerElement = (
  <Provider store={store}>
      <Router routes={routes} history={history}>
        <App />
      </Router>
  </Provider>

);

// Render the main component into the dom

ReactDOM.render(routerElement, document.getElementById('app'));
