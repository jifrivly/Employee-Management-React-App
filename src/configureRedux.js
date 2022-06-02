import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './Redux/Reducers';

const composeEnhancer = composeWithDevTools({trace: true});

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk, logger))
);

const ReduxProvider = props => (
    <Provider store={store}>{props.children}</Provider>
);

export default ReduxProvider;