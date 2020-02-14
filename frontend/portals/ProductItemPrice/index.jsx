import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { I18n } from '@shopgate/engage/components';
import connect from './connector';

const pointPriceStyle = css({
  lineHeight: 1.75,
});

/**
 * ProductItemPrice component
 * @param {Object} redeemProduct Swell redeem option type product
 * @param {Node} children Portal children
 * @return {JSX|Node}
 * @constructor
 */
const ProductItemPrice = ({ redeemProduct, children }) => {
  if (!redeemProduct) {
    return children;
  }

  const { costInPoints, costText } = redeemProduct;
  const pointPrice = costText || <I18n.Text string="swell.points" params={{ points: costInPoints }} />;

  return (
    <div className={pointPriceStyle}>
      {pointPrice}
    </div>
  );
};

ProductItemPrice.propTypes = {
  children: PropTypes.node,
  redeemProduct: PropTypes.shape(),
};

ProductItemPrice.defaultProps = {
  children: null,
  redeemProduct: null,
};

export default connect(ProductItemPrice);
