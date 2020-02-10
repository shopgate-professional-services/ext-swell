import { css } from 'glamor';

/**
 * @param {string} color font color for widget
 * @param {string} backgroundImage background image for widget
 * @returns {Function}
 */
const container = (color, backgroundImage) => css({
  color,
  backgroundImage,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '450px',
  width: '100%',
  textAlign: 'center',
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

const joinButton = css({
  fontSize: '18px',
  marginBottom: '10px',
  backgroundColor: '#002554',
  color: '#fff',
  width: '50%',
  maxWidth: '175px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #002554',
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
