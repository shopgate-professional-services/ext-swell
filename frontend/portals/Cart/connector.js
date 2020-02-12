import { connect } from 'react-redux';
import { getUserFirstName, isUserLoggedIn } from '@shopgate/engage/user';
import { getSwellCustomerPoints, getSwellCustomerIsFetching } from '../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  points: getSwellCustomerPoints(state),
});

export default connect(mapStateToProps);
