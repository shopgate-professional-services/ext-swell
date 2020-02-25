import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { logger } from '@shopgate/engage/core';
import CampaignCard from './components/CampaignCard';
import styles from './style';
import connect from './connector';

/**
 * @returns {JSX}
 */
const SwellActiveCampaigns = ({
  activeCampaigns,
  settings,
  refreshSwell,
  getSwellPopup,
  openPageExtern,
}) => {
  if (!activeCampaigns) {
    return null;
  }

  /**
   * Modify click handlers for Swell modal links
   * @param {Event} event Event
   */
  const modifyClicks = (event) => {
    const anchor = event.target.closest('a');
    if (anchor && anchor.target === '_blank') {
      event.preventDefault();
      openPageExtern(anchor.href);
    }
  };

  useEffect(() => {
    let swellPopup = null;
    if (activeCampaigns && activeCampaigns.length) {
      refreshSwell();
      getSwellPopup()
        .then((swellPopupDoc) => {
          if (!swellPopupDoc) {
            return;
          }
          swellPopup = swellPopupDoc;
          swellPopupDoc.addEventListener('click', modifyClicks, true);
          swellPopupDoc.addEventListener('touchstart', modifyClicks, true);
        })
        .catch((err) => {
          logger.error(err);
        });

      // return cleanup
      return () => {
        if (!swellPopup) {
          return;
        }

        swellPopup.removeEventListener('click', modifyClicks, true);
        swellPopup.removeEventListener('touchstart', modifyClicks, true);
      };
    }
  }, [activeCampaigns]);

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
  getSwellPopup: PropTypes.func,
  openPageExtern: PropTypes.func,
  refreshSwell: PropTypes.func,
  settings: PropTypes.shape(),
};

SwellActiveCampaigns.defaultProps = {
  activeCampaigns: null,
  getSwellPopup: Promise.resolve(),
  openPageExtern: () => {},
  refreshSwell: () => {},
  settings: {},
};

export default connect(SwellActiveCampaigns);
