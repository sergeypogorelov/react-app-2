/* istanbul ignore file */

import './styles/index.scss';

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './app/redux/configure-store';

import { SSR } from './app/core/helpers/ssr/ssr.class';

import { app } from './app/app.hoc';

const store = configureStore(SSR.getPreloadedState());
const App = app(store, BrowserRouter);

hydrate(<App />, document.getElementById('root'));

SSR.deletePreloadedState();
