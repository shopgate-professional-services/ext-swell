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
  isFetching,
  loggedIn,
  settings,
  points,
}) => {
  if (isFetching) {
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
    loggedOutBackgroundImage,
  } = settings || {};

  const render = loggedIn ?
    <LoggedInView
      buttonBackgroundColor={buttonBackgroundColor}
      buttonFontColor={buttonFontColor}
      headerTextColor={headerTextColor}
      historyButtonText={historyButtonText}
      firstName={firstName}
      points={points}
      redeemButtonText={redeemButtonText}
    /> :
    <LoggedOutView
      loggedOutTitleFontColor={loggedOutTitleFontColor}
      loggedOutTitle={loggedOutTitle}
      loggedOutSubtext={loggedOutSubtext}
      signUpText={signUpText}
      accountText={accountText}
      signInText={signInText}
      loggedOutBackgroundImage={loggedOutBackgroundImage}
    />;

  return render;
};

SwellWelcome.propTypes = {
  firstName: PropTypes.string,
  isFetching: PropTypes.bool,
  loggedIn: PropTypes.bool,
  points: PropTypes.number,
  settings: PropTypes.shape(),
};

SwellWelcome.defaultProps = {
  firstName: null,
  isFetching: true,
  loggedIn: false,
  points: 0,
  settings: {
    buttonBackgroundColor: '#002554',
    buttonFontColor: '#fff',
    headerTextColor: '#022653',
    historyButtonText: 'reward history',
    redeemButtonText: 'redeem now',
    loggedOutTitleFontColor: '#002554',
    loggedOutTitle: 'rewards',
    loggedOutSubtext: 'Get closer to earning special rewards everytime you shop on drinkhint.com',
    signUpText: 'sign up',
    accountText: 'Already have an account?',
    signInText: 'Sign In to see your points.',
    loggedOutBackgroundImage: 'url(//cdn.shopify.com/s/files/1/0014/3015/9418/files/swell-banner.jpg?140743)',
  },
};

export default connect(SwellWelcome);
