import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { I18n } from '@shopgate/engage/components';
import RedeemOptions from '../../components/RedeemOptions';
import connect from './connector';

const pointsWrapper = css({
  fontSize: '18px',
  margin: '12px 16px',
});

/**
 * Cart portal
 * @param {number} points Points
 * @return {null|*}
 * @constructor
 */
const Cart = ({ points }) => {
  if (points === null) {
    return null;
  }

  return (
    <div>
      <div className={pointsWrapper}>
        <I18n.Text string="swell.cart.points" params={{ points }} />
      </div>

      <RedeemOptions settings={{ title: 'swell.redeem_for_discounts' }} />
    </div>
  );
};

Cart.propTypes = {
  points: PropTypes.number,
};

Cart.defaultProps = {
  points: null,
};

export default connect(Cart);
