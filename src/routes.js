import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './services/auth'

import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  )} />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <Welcome />} />
      <Route exact path='/signup' component={() => <SignUp />} />
      <Route exact path='/signin' component={() => <SignIn />} />
      <PrivateRoute exact path='/app' component={() => <h1>Voce está logado</h1>} />
      <Route path='*' component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes