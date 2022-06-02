import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ReduxProvider from './configureRedux';
import reportWebVitals from './reportWebVitals';

import MainFrame from './Routes/MainFrame';
import LoginPage from './Routes/Login';

import { ROUTES } from './Routes.constants';
import { CommonUtils } from './utils/commonUtils';

import './index.scss';

function render(View) {
  return CommonUtils.isLoggedIn() ?
    <Redirect to="/" /> :
    View;
};

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <Switch>
          <Route path={ROUTES.LOGIN} render={(props) => render(<LoginPage {...props} />)} />
          <Route path={ROUTES.INDEX} component={MainFrame} />
          <Redirect from='*' to={ROUTES.INDEX} />
        </Switch>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
