/* istanbul ignore file */

import './styles/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import configureStore from './app/redux/configure-store';
import { initialState } from './app/redux/reducers';

import { app } from './app/app.hoc';

const store = configureStore(initialState);
const App = app(store, HashRouter);

render(<App />, document.getElementById('root'));
