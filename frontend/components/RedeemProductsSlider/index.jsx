import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { I18n } from '@shopgate/engage/components';
import { useTheme } from '@shopgate/engage/core';
import connect from './connector';

const headline = css({
  fontSize: '22px',
  margin: '12px 16px',
});

/**
 * RedeemProductsSlider
 * @param {Function} fetchProducts Fetch products
 * @param {string[]} redeemProducts Swell product redemption option Id
 * @return {JSX}
 */
const RedeemProductsSlider = ({ fetchProducts, redeemProductIds }) => {
  useEffect(() => {
    if (!redeemProductIds.length) {
      return;
    }

    fetchProducts(redeemProductIds);
  }, [redeemProductIds]);

  const { ProductSlider } = useTheme();

  if (!redeemProductIds.length) {
    return null;
  }

  return (
    <div>
      <h2 className={headline}>
        <I18n.Text string="swell.redeem_for_products" />
      </h2>
      <ProductSlider
        productIds={redeemProductIds}
      />
    </div>
  );
};

RedeemProductsSlider.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  redeemProductIds: PropTypes.arrayOf(PropTypes.string),
};

RedeemProductsSlider.defaultProps = {
  redeemProductIds: [],
};

export default connect(RedeemProductsSlider);
