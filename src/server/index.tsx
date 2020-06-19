import 'ignore-styles';

import path from 'path';
import express from 'express';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import configureStore from '../client/app/redux/configure-store';
import { initialState } from '../client/app/redux/reducers';

import { reduxPromiseMiddlewareAdapter } from './redux-promise-middleware-adapter';
import { ReduxPromiseMiddlewareObserver } from './redux-promise-middleware-observer.class';

import { app as appHoc } from '../client/app/app.hoc';
import { SSR } from '../client/app/core/helpers/ssr/ssr.class';

const foldersByEnv: Record<string, string> = {
  DEV: 'dist-dev',
  PROD: 'dist-prod',
};

const app = express();

const ENV = process.env.NODE_APP_ENV;
const BUILD_FOLDER = foldersByEnv[ENV];

const staticPath = path.resolve(__dirname, `../../${BUILD_FOLDER}`);
app.use(express.static(staticPath));

app.get('*', (req, res, next) => {
  if (req.url.includes('.')) {
    return next();
  }

  const observer = new ReduxPromiseMiddlewareObserver();
  const ssrAdapter = reduxPromiseMiddlewareAdapter(observer);
  const store = configureStore(initialState, ssrAdapter);

  const AppClient = appHoc(store, StaticRouter, req.url);

  observer.start();

  renderToString(<AppClient />);

  observer.waitForAllPromisesDone().then(() => {
    SSR.preventRequests = true;

    const html = renderToString(<AppClient />);

    console.log(store.getState(), html);

    res.sendFile(path.resolve(__dirname, `../../${BUILD_FOLDER}/index.html`));
  });
});

const port = 4200;
app.listen(port, () =>
  console.log(
    `Client is built in ${ENV} mode. Server is listening on http://localhost:${port}`
  )
);
