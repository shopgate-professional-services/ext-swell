import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * @returns {JSX}
 */
const CampaignCard = ({ campaign, className }) => {
  const { title, rewardText } = campaign;

  return (
    <div className={className}>
      <div className={styles.content}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.subtext}>
          {rewardText}
        </div>
      </div>
    </div>
  );
};

CampaignCard.propTypes = {
  campaign: PropTypes.shape().isRequired,
  className: PropTypes.string.isRequired,
};

export default CampaignCard;
