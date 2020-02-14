import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors: { primary, primaryContrast } } = themeConfig;

/**
 * @param {string} [color] font color for widget
 * @param {string} [background] background for widget
 * @param {string} [margin] margin value for widget
 * @returns {Function}
 */
const container = (color, background, margin) => css({
  color: color || primary,
  background,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '450px',
  width: '100%',
  textAlign: 'center',
  margin: margin || '10px 0',
}).toString();

const title = css({
  maxWidth: '315px',
  fontSize: '70px',
  fontWeight: 'bold',
  lineHeight: '1',
}).toString();

const subtext = css({
  maxWidth: '315px',
  fontSize: '16px',
  marginBottom: '30px',
}).toString();

/**
 * Get join button style
 * @param {string} [buttonBackgroundColor] Background color string
 * @param {string} [buttonFontColor] Text color string
 * @return {string}
 */
const joinButton = (buttonBackgroundColor, buttonFontColor) => css({
  fontSize: '18px',
  marginBottom: '10px',
  backgroundColor: buttonBackgroundColor || primary,
  color: buttonFontColor || primaryContrast,
  width: '50%',
  maxWidth: '175px',
  padding: '10px',
  borderRadius: '5px',
  border: `1px solid ${buttonBackgroundColor || primary}`,
  textAlign: 'center',
}).toString();

const accountNotice = css({
  fontSize: '16px',
  maxWidth: '200px',
}).toString();

const signIn = css({
  fontWeight: '400',
  fontSize: '16px',
  maxWidth: '200px',
}).toString();

const signInLink = css({
  display: 'inline',
  textDecoration: 'underline',
}).toString();

export default {
  container,
  title,
  subtext,
  joinButton,
  accountNotice,
  signIn,
  signInLink,
};
