import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import App from './components/App';


export default (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
    </Route>
  </Router>
);
