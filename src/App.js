import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import employees from './Data/employees.json';

import { MainFrame } from './Routes/MainFrame';
import LoginPage from './Routes/Login';

import { ROUTES } from './Routes.constants';
import { CommonUtils } from './utils/commonUtils';

function render(View) {
    return CommonUtils.isLoggedIn() ? <Navigate to='/' /> : View;
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
                <Routes>
                    <Route path={ROUTES.LOGIN} element={(props) => render(<LoginPage {...props} />)}></Route>
                    <Route path={ROUTES.INDEX} element={<MainFrame employees={employees} />} />
                    <Route path='*' element={<Navigate to={ROUTES.INDEX} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
