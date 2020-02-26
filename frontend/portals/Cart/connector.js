import { connect } from 'react-redux';
import { getSwellCustomerPoints } from '../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  points: getSwellCustomerPoints(state),
});

export default connect(mapStateToProps);
