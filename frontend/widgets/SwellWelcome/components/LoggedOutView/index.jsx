import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from '@shopgate/engage/components';
import Link from '@shopgate/pwa-common/components/Link';
import { REGISTER_PATH, LOGIN_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import styles from './style';

/**
 * @returns {JSX}
 */
const LoggedOutView = ({
  loggedOutBackground,
  loggedOutTitleFontColor,
  loggedOutTitle,
  loggedOutSubtext,
  signUpText,
  accountText,
  signInText,
  widgetMargin,
  buttonBackgroundColor,
  buttonFontColor,
}) => (
  <div className={styles.container(loggedOutTitleFontColor, loggedOutBackground, widgetMargin)}>
    <div className={styles.title}>
      {loggedOutTitle}
    </div>
    <div className={styles.subtext}>
      {loggedOutSubtext}
    </div>
    <Link
      href={REGISTER_PATH}
      className={styles.joinButton(buttonBackgroundColor, buttonFontColor)}
    >
      <I18n.Text string={signUpText} />
    </Link>
    <I18n.Text className={styles.accountNotice} string={accountText} />
    <div className={styles.signIn}>
      <Link
        href={LOGIN_PATH}
        className={styles.signInLink}
      >
        <I18n.Text string={signInText} />
      </Link>
    </div>
  </div>
);

LoggedOutView.propTypes = {
  accountText: PropTypes.string.isRequired,
  loggedOutSubtext: PropTypes.string.isRequired,
  loggedOutTitle: PropTypes.string.isRequired,
  signInText: PropTypes.string.isRequired,
  signUpText: PropTypes.string.isRequired,
  buttonBackgroundColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
  loggedOutBackground: PropTypes.string,
  loggedOutTitleFontColor: PropTypes.string,
  widgetMargin: PropTypes.string,
};

LoggedOutView.defaultProps = {
  loggedOutTitleFontColor: null,
  loggedOutBackground: null,
  buttonBackgroundColor: null,
  buttonFontColor: null,
  widgetMargin: null,
};

export default LoggedOutView;
