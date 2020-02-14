import { css } from 'glamor';

const container = css({
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
}).toString();

/**
 * @param {string} backgroundColor backgroundColor
 * @param {string} color color
 * @returns {Object}
 */
const card = (backgroundColor, color) => css({
  backgroundColor,
  color,
}).toString();

export default {
  container,
  card,
};
