import 'ignore-styles';

import path from 'path';
import fs from 'fs';
import express from 'express';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import configureStore from '../client/app/redux/configure-store';
import { initialState } from '../client/app/redux/reducers';

import { reduxPromiseMiddlewareAdapter } from './redux-promise-middleware-adapter';
import { ReduxPromiseMiddlewareObserver } from './redux-promise-middleware-observer.class';

import { SSR } from '../client/app/core/helpers/ssr/ssr.class';

import { app as appHoc } from '../client/app/app.hoc';

const foldersByEnv: Record<string, string> = {
  DEV: 'dist-dev',
  PROD: 'dist-prod',
};

const app = express();

const ENV = process.env.NODE_APP_ENV;
const BUILD_FOLDER = foldersByEnv[ENV];

const staticPath = path.resolve(__dirname, `../../${BUILD_FOLDER}`);
app.use(express.static(staticPath, { index: false }));

app.get('*', (req, res, next) => {
  if (req.url.includes('.')) {
    return next();
  }

  const observer = new ReduxPromiseMiddlewareObserver();
  const ssrAdapter = reduxPromiseMiddlewareAdapter(observer);
  const store = configureStore(initialState, ssrAdapter);

  const context: any = {};
  const AppClient = appHoc(store, StaticRouter, req.url, context);

  observer.start();

  renderToString(<AppClient />);

  if (context.url) {
    res.writeHead(302, { Location: context.url }).end();
    return;
  }

  observer.waitForAllPromisesDone().then(() => {
    SSR.preventRequests = true;

    const html = renderToString(<AppClient />);

    SSR.preventRequests = false;

    fs.readFile(path.resolve(staticPath, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const state = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

      data = data.replace('${html}', html);
      data = data.replace("'${state}'", state);

      res.status(200).send(data).end();
    });
  });
});

const port = 4200;
app.listen(port, () =>
  console.log(
    `Client is built in ${ENV} mode. Server is listening on http://localhost:${port}`
  )
);
