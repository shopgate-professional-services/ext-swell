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
}) => {
  const {
    costInPoints,
    costText,
    name,
    backgroundImageUrl,
    id,
  } = redeemOption;
  const pointsPrice = costText || <I18n.Text string="swell.points" params={{ points: costInPoints }} />;

  return (
    <div
      className={`${styles.container(backgroundColor, textColor, backgroundImageUrl)} swell-redemption-link`}
      data-redemption-option-id={id}
    >
      <div>
        <p className={styles.name}>{name}</p>
        <p>{pointsPrice}</p>
      </div>
    </div>
  );
};

RedeemOptionItem.propTypes = {
  redeemOption: PropTypes.shape().isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

RedeemOptionItem.defaultProps = {
  backgroundColor: null,
  textColor: null,
};

export default RedeemOptionItem;
