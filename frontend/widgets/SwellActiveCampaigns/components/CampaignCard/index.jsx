import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * @returns {JSX}
 */
const CampaignCard = ({ campaign, className }) => {
  const { title, rewardText } = campaign;

  return (
    <div className={`${className} ${styles.content}`}>
      <div>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.subtext}>
          {rewardText}
        </p>
      </div>
    </div>
  );
};

CampaignCard.propTypes = {
  campaign: PropTypes.shape().isRequired,
  className: PropTypes.string.isRequired,
};

export default CampaignCard;
