import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { I18n } from '@shopgate/engage/components';
import Link from '@shopgate/pwa-common/components/Link';
import { CART_PATH } from '@shopgate/pwa-common-commerce/cart/constants';
import getSwellSdk from '../../../../helpers/getSwellSdk';
import styles from './style';

/**
 * @returns {string}
 */
const LoggedInView = ({
  buttonBackgroundColor,
  buttonFontColor,
  firstName,
  headerTextColor,
  historyButtonText,
  points,
  redeemButtonText,
  widgetMargin,
}) => {
  useEffect(() => {
    if (!window.swellAPI) {
      getSwellSdk();
    }
  });

  /**
   * @param {Class} e event Class passed
   */
  const showModal = (e) => {
    e.preventDefault();
    window.swellAPI.showPopupByType('HistoryPopup');
  };

  return (
    <div className={styles.container(widgetMargin)}>
      <I18n.Text className={styles.heading(headerTextColor)} string="swell.welcome.greeting" params={{ firstName }} />
      <I18n.Text className={styles.heading(headerTextColor)} string="swell.welcome.points" params={{ points }} />
      <div className={styles.buttonContainer}>
        <Link
          href={CART_PATH}
          className={styles.button(buttonFontColor, buttonBackgroundColor)}
        >
          {redeemButtonText}
        </Link>
        <button type="button" className={styles.button(buttonFontColor, buttonBackgroundColor)} onClick={showModal}>
          {historyButtonText}
        </button>
      </div>
    </div>
  );
};

LoggedInView.propTypes = {
  historyButtonText: PropTypes.string.isRequired,
  redeemButtonText: PropTypes.string.isRequired,
  buttonBackgroundColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
  firstName: PropTypes.string,
  headerTextColor: PropTypes.string,
  points: PropTypes.number,
  widgetMargin: PropTypes.string,
};

LoggedInView.defaultProps = {
  buttonBackgroundColor: null,
  buttonFontColor: null,
  firstName: null,
  headerTextColor: null,
  points: 0,
  widgetMargin: null,
};

export default LoggedInView;
