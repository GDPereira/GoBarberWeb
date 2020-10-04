import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Signup from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" exact component={Signup} />
  </Switch>
);

export default Routes;
