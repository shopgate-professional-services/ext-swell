import { css } from 'glamor';

const content = css({
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

}).toString();

const title = css({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '5px',
}).toString();

const subtext = css({
  fontSize: '14px',
}).toString();

export default {
  content,
  title,
  subtext,
};
