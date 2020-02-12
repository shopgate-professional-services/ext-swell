import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@shopgate/engage/core';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import TopHat from '../../icons/TopHat';
import { showSwellNavigation, swellButtonText, swellRewardsPath } from '../../config';

/**
 * NavDrawer (and MoreMenu) Item.
 * @param {Object} props Props.
 * @returns {JSX}
 */
const NavDrawerItem = ({ Item }) => {
  const { push } = useNavigation();

  if (isIOSTheme() || !showSwellNavigation) {
    return null;
  }

  return (
    <Item
      label={swellButtonText || 'swell.rewards_button'}
      icon={props => <TopHat {...props} />}
      onClick={() => push({ pathname: swellRewardsPath })}
    />
  );
};

NavDrawerItem.propTypes = {
  Item: PropTypes.func.isRequired,
};

export default NavDrawerItem;
