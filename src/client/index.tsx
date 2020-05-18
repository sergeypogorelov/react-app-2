import './styles/index.scss';

import React from 'react';
import { render } from 'react-dom';

import { ErrorBoundary } from './app/shared/error-boundary/error-boundary.component';
import { App } from './app/app.component';

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
