import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware , ConnectedRouter} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import createRootReducer from 'reducers';
import Layout from 'containers/layout'


const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history), 
    composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="menu">
                <ul className="head__section__menubox">
                    <a href="/"><li>Main</li></a>
                    <a href="/products"><li>Products</li></a>
                    <a href="/contacts"><li>Contacts</li></a>
                </ul>
            </div>
            <Layout />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')

);