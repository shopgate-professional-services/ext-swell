import React from 'react';
import PropTypes from 'prop-types';
import connect from './connector';

/**
 * @returns {JSX}
 */
const SwellActiveCampaigns = ({ activeCampaigns, settings }) => {
  if (!activeCampaigns) {
    return null;
  }

  console.warn(activeCampaigns);

  return (
    <div>
      Hi
    </div>
  );
};

SwellActiveCampaigns.propTypes = {
  activeCampaigns: PropTypes.arrayOf(PropTypes.shape()),
  settings: PropTypes.shape(),
};

SwellActiveCampaigns.defaultProps = {
  activeCampaigns: null,
  settings: {},
};

export default connect(SwellActiveCampaigns);
