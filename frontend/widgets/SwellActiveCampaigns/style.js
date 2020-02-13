import { css } from 'glamor';

const container = css({
  margin: '0 auto',
  overflow: 'hidden',
  width: '90%',
}).toString();

/**
 * @param {string} backgroundColor backgroundColor
 * @param {string} color color
 * @returns {Object}
 */
const card = (backgroundColor, color) => css({
  float: 'left',
  position: 'relative',
  backgroundColor,
  color,
  margin: 10,
  width: '44%',
  paddingBottom: '44%',
}).toString();

export default {
  container,
  card,
};
