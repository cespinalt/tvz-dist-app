/*
*
* @flow
*
*/

import React from 'react';

/**
 * This component seems to be dummy as of now, but I figured is better
 * to have it here for now instead of rendering the image element to the DOM.
 * Later on images we will get encrypted images from CDN, and we can have logic
 * to decrypt those images and any other logic that could be needed.
 **/

type Props = {
  alt: string,
  className?: string,
  src: string,
};

const Image = (props: Props): React.Element<any> => {
  return <img alt={props.alt || ''} src={props.src} />;
}

export default Image;
