import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors: { primary, primaryContrast } } = themeConfig;

/**
 * Get container style
 * @param {string} backgroundColor Background color
 * @param {string} textColor Text color
 * @param {string} backgroundImageUrl Background image url
 * @return {string}
 */
const container = (backgroundColor, textColor, backgroundImageUrl) => {
  const rules = {
    padding: 7,
    color: textColor || primaryContrast,
    backgroundColor: backgroundColor || primary,
    marginRight: 6,
    marginBottom: 6,
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    minHeight: '80px',
    alignItems: 'center',
  };

  if (backgroundImageUrl) {
    rules.backgroundImage = `url(${backgroundImageUrl})`;
    rules.backgroundPosition = 'center';
    rules.backgroundRepeat = 'no-repeat';
    rules.backgroundSize = 'contain';
  }

  return css(rules).toString();
};

const pointsPrice = css({
  position: 'absolute',
  bottom: '2px',
  left: 0,
  width: '100%',
});

const name = css({
  fontSize: '22px',
  fontWeight: 'bold',
}).toString();

export default {
  container,
  name,
  pointsPrice,
};
