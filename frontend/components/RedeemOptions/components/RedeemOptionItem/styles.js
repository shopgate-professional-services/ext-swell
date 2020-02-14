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
    color: textColor || primaryContrast,
    backgroundColor: backgroundColor || primary,
    marginRight: 6,
    marginBottom: 6,
    position: 'relative',
    minHeight: '80px',
    textAlign: 'center',
    lineHeight: '1',
    width: 'calc(50% - 10px)',
    margin: 5,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':after': {
      content: ' ',
      display: 'block',
      paddingBottom: '100%',
    },
  };

  if (backgroundImageUrl) {
    rules.backgroundImage = `url(${backgroundImageUrl})`;
    rules.backgroundPosition = 'center';
    rules.backgroundRepeat = 'no-repeat';
    rules.backgroundSize = 'contain';
  }

  return css(rules).toString();
};

const name = css({
  fontSize: '22px',
  fontWeight: 'bold',
  marginBottom: 5,
}).toString();

export default {
  container,
  name,
};
