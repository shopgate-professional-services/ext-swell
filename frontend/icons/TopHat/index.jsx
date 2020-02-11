import React from 'react';
import Icon from '@shopgate/pwa-common/components/Icon';
import { swellIconSvg } from '../../config';

/**
 * The TopHat icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const TopHat = (props) => {
  const content = `
 <path d="M155.8,136.6c-3.9-34.9,7.8-89.2,7.8-89.2s0-19.4-58.2-19.4S39.5,47.4,39.5,47.4c7.8,31,7.8,89.2,7.8,89.2
   C22,134.6,22,142.4,22,142.4c36.8-1.9,75.8,31.6,97,34.9c36.8,5.8,56-3.3,59-22.3C181,135.8,155.8,136.6,155.8,136.6z"/>
 <path d="M32.9,152.7c-13.6-1.2-12.2,8.1-12.2,8.1c-0.9,24.7,66.8,16.4,69,16.4C92,177.1,49.1,154.2,32.9,152.7z"/>
  `;

  return <Icon content={swellIconSvg || content} viewBox="0 0 200 200" {...props} />;
};

export default TopHat;
