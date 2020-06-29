import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CampaignCard from './components/CampaignCard';
import styles from './style';
import connect from './connector';

/**
 * @returns {JSX}
 */
const SwellActiveCampaigns = ({ activeCampaigns, settings, refreshSwell }) => {
  useEffect(() => {
    if (activeCampaigns && activeCampaigns.length) {
      refreshSwell();
    }
  }, [activeCampaigns]);

  if (!activeCampaigns) {
    return null;
  }

  const { backgroundColor, fontColor } = settings;

  const render = activeCampaigns.map(campaign =>
    <CampaignCard
      key={campaign.id}
      className={styles.card(backgroundColor, fontColor)}
      campaign={campaign}
    />);

  return (
    <div className={styles.container}>
      {render}
    </div>
  );
};

SwellActiveCampaigns.propTypes = {
  activeCampaigns: PropTypes.arrayOf(PropTypes.shape()),
  refreshSwell: PropTypes.func,
  settings: PropTypes.shape(),
};

SwellActiveCampaigns.defaultProps = {
  activeCampaigns: null,
  refreshSwell: () => {},
  settings: {},
};

export default connect(SwellActiveCampaigns);
