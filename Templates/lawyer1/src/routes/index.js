import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import React from 'react';
import Main from '../pages/main';
import Login from '../pages/login';

// import { Container } from './styles';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
const Router = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Router;
