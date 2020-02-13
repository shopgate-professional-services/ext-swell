import { css } from 'glamor';

const content = css({
  position: 'absolute',
  textAlign: 'center',
  lineHeight: '1',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
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
