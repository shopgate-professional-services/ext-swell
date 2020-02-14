import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from '@shopgate/engage/components';
import styles from './styles';

/**
 * RedeemOptionItem component
 * @param {Object} redeemOption Swell redeem option
 * @param {string} backgroundColor Background color
 * @param {string} textColor Text color
 * @param {string} key Key
 * @return {JSX}
 */
const RedeemOptionItem = ({
  redeemOption,
  backgroundColor,
  textColor,
  key,
}) => {
  const {
    costInPoints,
    costText,
    name,
    backgroundImageUrl,
  } = redeemOption;
  const pointsPrice = costText || <I18n.Text string="swell.points" params={{ points: costInPoints }} />;

  return (
    <div
      key={key}
      className={styles.container(backgroundColor, textColor, backgroundImageUrl)}
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.pointsPrice}>{pointsPrice}</div>
    </div>
  );
};

RedeemOptionItem.propTypes = {
  key: PropTypes.string.isRequired,
  redeemOption: PropTypes.shape().isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

RedeemOptionItem.defaultProps = {
  backgroundColor: null,
  textColor: null,
};

export default RedeemOptionItem;