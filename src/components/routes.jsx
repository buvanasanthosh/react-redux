import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppComponent from './Main'

const routes = (
  <Route path="/ghack" component={AppComponent}>
    //todo add index route and other routes
  </Route>
);

export default routes;
