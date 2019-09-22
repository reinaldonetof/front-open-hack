import React, { Component } from 'react'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';

import AuthContextProvider from "./contexts/AuthContext"

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';

import './styles.css'


import Routes from './routes';

const browserHistory = createBrowserHistory();
    
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </AuthContextProvider>
      </ThemeProvider>
    );
  }
}
