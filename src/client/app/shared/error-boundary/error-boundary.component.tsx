import React from 'react';

import { ErrorBoundaryState } from './error-boundary-state.interface';

import { ModalAlert } from '../modal-alert/modal-alert.component';

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <ModalAlert title="Error" onClose={this.handleOnModalClose}>
        <p className="h5 text-center text-dark m-0">
          Something went wrong. Click OK to reload the page.
        </p>
      </ModalAlert>
    ) : (
      this.props.children
    );
  }

  reload = () => {
    window.location.reload();
  };

  handleOnModalClose = () => {
    this.reload();
  };
}
