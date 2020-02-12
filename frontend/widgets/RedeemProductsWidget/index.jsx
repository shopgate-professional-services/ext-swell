import React, { useEffect } from 'react';
import { useTheme } from '@shopgate/engage/core';
import connect from './connector';

const RedeemProductsWidget = ({ fetchProducts, productIds }) => {
  const { ProductSlider } = useTheme();
  useEffect(() => {
    if (!productIds.length) {
      return;
    }
    fetchProducts(productIds);
  }, [productIds]);
  fetchProducts(productIds);
  return (
    <div>
      <div> swell slider </div>
      <ProductSlider
        productIds={productIds}
      />
    </div>
  );
};

export default connect(RedeemProductsWidget);
