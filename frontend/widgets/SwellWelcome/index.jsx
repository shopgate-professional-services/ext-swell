import React from 'react';
import PropTypes from 'prop-types';
import LoggedInView from './components/LoggedInView';
import LoggedOutView from './components/LoggedOutView';
import connect from './connector';

/**
 * @returns {JSX}
 */
const SwellWelcome = ({
  firstName,
  loggedIn,
  settings,
  points,
}) => {
  if (!settings) {
    return null;
  }

  const {
    buttonBackgroundColor,
    buttonFontColor,
    headerTextColor,
    historyButtonText,
    redeemButtonText,
    loggedOutTitleFontColor,
    loggedOutTitle,
    loggedOutSubtext,
    signUpText,
    accountText,
    signInText,
    loggedOutBackground,
    widgetMargin,
  } = settings;

  return loggedIn ?
    <LoggedInView
      buttonBackgroundColor={buttonBackgroundColor}
      buttonFontColor={buttonFontColor}
      headerTextColor={headerTextColor}
      historyButtonText={historyButtonText}
      firstName={firstName}
      points={points}
      redeemButtonText={redeemButtonText}
      widgetMargin={widgetMargin}
    /> :
    <LoggedOutView
      loggedOutTitleFontColor={loggedOutTitleFontColor}
      loggedOutTitle={loggedOutTitle}
      loggedOutSubtext={loggedOutSubtext}
      signUpText={signUpText}
      accountText={accountText}
      signInText={signInText}
      loggedOutBackground={loggedOutBackground}
      widgetMargin={widgetMargin}
      buttonBackgroundColor={buttonBackgroundColor}
      buttonFontColor={buttonFontColor}
    />;
};

SwellWelcome.propTypes = {
  firstName: PropTypes.string,
  loggedIn: PropTypes.bool,
  points: PropTypes.number,
  settings: PropTypes.shape(),
};

SwellWelcome.defaultProps = {
  firstName: null,
  loggedIn: false,
  points: 0,
  settings: {},
};

export default connect(SwellWelcome);
