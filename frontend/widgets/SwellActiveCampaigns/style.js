import { css } from 'glamor';

const container = css({
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  width: '90%',

}).toString();

/**
 * @param {string} backgroundColor backgroundColor
 * @param {string} color color
 * @returns {Object}
 */
const card = (backgroundColor, color) => css({
  backgroundColor,
  color,
  margin: 10,
  width: '40%',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}).toString();

export default {
  container,
  card,
};
