import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import HomeComponent from '../components/home/Home';
import MainComponent from '../components/main/Main';
import AppComponent from '../components/App';
import PromptContainer from '../containers/PromptContainer';

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainComponent}>
      {/* The index route is displayed when none of the other explicit routes are called*/}
      <IndexRoute component={HomeComponent}/>
      <Route path='/app' component={AppComponent}/>
      <Route path='/playerOne' header='Player One' component={PromptContainer}/>
      <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
    </Route>
  </Router>
);

export default Routes;
