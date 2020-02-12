import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import connect from './connector';
import styles from '../../widgets/SwellWelcome/components/LoggedInView/style';
import { I18n } from '@shopgate/engage/components';

const Cart = ({ points }) => {
  if (points === null) {
    return null;
  }
  
  return (
    <div>
      <I18n.Text string="swell.cart.points" params={{ points }} />
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
