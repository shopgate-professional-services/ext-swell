import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors: { primary, primaryContrast } } = themeConfig;

/**
 * @param { string} [margin] margin value for widget
 * @returns {Function}
 */
const container = margin => css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  margin: margin || '10px 0',
}).toString();

const buttonContainer = css({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}).toString();

/**
 * @param {string} [headerTextColor] color for text
 * @returns {Function}
 */
const heading = headerTextColor => css({
  fontSize: '26px !important',
  lineHeight: 1,
  color: `${headerTextColor || primary} !important`,
}).toString();

/**
 * @param {string} [color] color for font in button
 * @param {string} [backgroundColor] backgroundColor for button
 * @returns {Function}
 */
const button = (color, backgroundColor) => css({
  marginBottom: '10px',
  backgroundColor: backgroundColor || primary,
  color: color || primaryContrast,
  width: '40%',
  maxWidth: '175px',
  padding: '10px',
  borderRadius: '5px',
  border: `1px solid ${backgroundColor || primary}`,
  textAlign: 'center',
}).toString();

export default {
  button,
  buttonContainer,
  container,
  heading,
};
