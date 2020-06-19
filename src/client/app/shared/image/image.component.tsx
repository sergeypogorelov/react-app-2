import React from 'react';

import { imageNotFound } from '../../core/constants/assets-urls';

import { ImageProps } from './image-props.interface';
import { ImageState } from './image-state.interface';

export class Image extends React.Component<ImageProps, ImageState> {
  constructor(props: Readonly<ImageProps>) {
    super(props);

    const { src } = props;

    this.state = { src };
  }

  componentDidUpdate(prevProps: Readonly<ImageProps>) {
    const { src: currSrc } = this.props;
    const { src: prevSrc } = prevProps;

    if (currSrc !== prevSrc) {
      this.setState({ src: currSrc });
    }
  }

  render() {
    return (
      <img
        className={this.props.className}
        src={this.state.src}
        onError={this.handleImgError}
      />
    );
  }

  handleImgError = () => {
    this.setState({ src: imageNotFound });
  };
}
