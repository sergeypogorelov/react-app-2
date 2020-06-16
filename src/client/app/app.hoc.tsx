import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { ErrorBoundary } from './shared/error-boundary/error-boundary.component';
import { App } from './app.component';

export const app = (store: any, Router: any, location?: any, context?: any) => {
  return () => (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <Router location={location} context={context}>
          <App />
        </Router>
      </ReduxProvider>
    </ErrorBoundary>
  );
};
