import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { imageNotFound } from '../../core/constants/assets-urls';

import { ImageProps } from './image-props.interface';

export const Image: FunctionComponent<ImageProps> = ({ className, src }) => {
  const [imgUrl, setImgUrl] = useState(src);

  const handleImgError = useCallback(() => {
    setImgUrl(imageNotFound);
  }, [setImgUrl]);

  useEffect(() => {
    setImgUrl(src);
  }, [src, setImgUrl]);

  return <img className={className} src={imgUrl} onError={handleImgError} />;
};
