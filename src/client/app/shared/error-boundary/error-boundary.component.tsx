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
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ModalAlert title="Error" onClose={this.handleOnModalClose}>
          <p>Something went wrong. Click OK to reload the page.</p>
        </ModalAlert>
      );
    }

    return this.props.children;
  }

  handleOnModalClose = () => {
    window.location.reload();
  };
}
