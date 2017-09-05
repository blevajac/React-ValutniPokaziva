import React from 'react';
import { Route, Switch } from 'react-router';

//components
import App from '../components/App';
import About from '../components/About';
import Error404 from '../components/Error404';

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={App}/>
    {/* both /roster and /roster/:number begin with /roster */}
    <Route path='/about' component={About}/>
    <Route path='/*' component={Error404}/>
  </Switch>
);
