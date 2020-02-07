import { css } from 'glamor';
// Prevent the display of Swell Rewards Tab
css.global('.swell-tab, #swell-popup', {
  display: 'none !important',
});

export default () => null;
