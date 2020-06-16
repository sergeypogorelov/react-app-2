/* istanbul ignore file */

import './styles/index.scss';

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { initialState } from './app/redux/reducers';
import configureStore from './app/redux/configure-store';

import { app } from './app/app.hoc';

const store = configureStore(initialState);

const App = app(store, BrowserRouter);

hydrate(<App />, document.getElementById('root'));
