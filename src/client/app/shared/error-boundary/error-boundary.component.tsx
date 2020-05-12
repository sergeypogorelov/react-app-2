import React from 'react';

import { ErrorBoundaryState } from './error-boundary-state.interface';

import { ModalAlert } from '../modal-alert/modal-alert.component';

export class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: true,
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
    return (
      <>
        {this.state.hasError && (
          <ModalAlert title="Error" onClose={this.handleOnModalClose}>
            Something went wrong. Please, reload the page.
          </ModalAlert>
        )}

        {this.props.children}
      </>
    );
  }

  handleOnModalClose = () => {
    this.setState({
      hasError: false,
    });
  };
}
