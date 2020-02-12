import { css } from 'glamor';

const title = css({
  marginBottom: '10px',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '1',
}).toString();

const subtext = css({
  textAlign: 'center',
  lineHeight: '1',
  fontSize: '14px',
}).toString();

export default {
  title,
  subtext,
};
