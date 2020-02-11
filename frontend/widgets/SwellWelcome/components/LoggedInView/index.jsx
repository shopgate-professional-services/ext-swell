import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { I18n } from '@shopgate/engage/components';
import Link from '@shopgate/pwa-common/components/Link';
import { CHECKOUT_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
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
    <div className={styles.container}>
      <I18n.Text className={styles.heading(headerTextColor)} string="swell.welcome.greeting" params={{ firstName }} />
      <I18n.Text className={styles.heading(headerTextColor)} string="swell.welcome.points" params={{ points }} />
      <div className={styles.buttonContainer}>
        <Link
          href={CHECKOUT_PATH}
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
  buttonBackgroundColor: PropTypes.string.isRequired,
  buttonFontColor: PropTypes.string.isRequired,
  headerTextColor: PropTypes.string.isRequired,
  historyButtonText: PropTypes.string.isRequired,
  redeemButtonText: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  points: PropTypes.number,
};

LoggedInView.defaultProps = {
  firstName: null,
  points: 0,
};

export default LoggedInView;
