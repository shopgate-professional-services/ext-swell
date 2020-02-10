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
  loggedOutBackgroundImage,
  loggedOutTitleFontColor,
  loggedOutTitle,
  loggedOutSubtext,
  signUpText,
  accountText,
  signInText,
}) => (
  <div className={styles.container(loggedOutTitleFontColor, loggedOutBackgroundImage)}>
    <div className={styles.title}>
      {loggedOutTitle}
    </div>
    <div className={styles.subtext}>
      {loggedOutSubtext}
    </div>
    <Link
      href={REGISTER_PATH}
      className={styles.joinButton}
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
  loggedOutTitleFontColor: PropTypes.string.isRequired,
  signInText: PropTypes.string.isRequired,
  signUpText: PropTypes.string.isRequired,
  loggedOutBackgroundImage: PropTypes.string,
};

LoggedOutView.defaultProps = {
  loggedOutBackgroundImage: null,
};

export default LoggedOutView;
