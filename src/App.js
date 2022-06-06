import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { MainFrame } from './Routes/MainFrame';
import LoginPage from './Routes/Login';

import { ROUTES } from './Routes.constants';
import { CommonUtils } from './utils/commonUtils';

function render(View) {
    return CommonUtils.isLoggedIn() ? <Redirect to='/' /> : View;
}

function App() {
    return (
        <div className='App'>
            {/* <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header> */}
            <Router>
                <Switch>
                    <Route path={ROUTES.LOGIN} render={(props) => render(<LoginPage {...props} />)} />
                    <Route path={ROUTES.INDEX} render={() => <MainFrame />} />
                    <Redirect from='*' to={ROUTES.INDEX} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
