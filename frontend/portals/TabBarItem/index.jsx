import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { useNavigation } from '@shopgate/engage/core';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import TopHat from '../../icons/TopHat';
import { showSwellNavigation, swellButtonText, swellRewardsPath } from '../../config';

const tabItemIconStyle = css({
  height: 24,
  width: 24,
  flexGrow: 1,
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: '2px',
});

/**
 * TabBarItem.
 * @param {Function} TabBarAction Tab Bar Action function.
 * @param {string} path path to navigate to.
 * @returns {JSX}
 */
const TabBarItem = ({ TabBarAction, path }) => {
  const { push } = useNavigation();

  if (!isIOSTheme() || !showSwellNavigation) {
    return null;
  }

  const isHighlighted = path === swellRewardsPath;

  /**
   * Handles click.
   * @param {MouseEvent} e Event.
   */
  const handleClick = (e) => {
    e.preventDefault();
    push({ pathname: swellRewardsPath });
  };

  return (
    <TabBarAction
      label={swellButtonText || 'swell.rewards_button'}
      icon={<TopHat isHighlighted={isHighlighted} className={tabItemIconStyle} isTabBar />}
      isHighlighted={isHighlighted}
      onClick={handleClick}
      aria-hidden
      tabIndex={-1}
    />
  );
};

TabBarItem.propTypes = {
  path: PropTypes.string.isRequired,
  TabBarAction: PropTypes.func.isRequired,
};

export default TabBarItem;
