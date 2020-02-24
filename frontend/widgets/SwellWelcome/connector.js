import { connect } from 'react-redux';
import { getUserFirstName, isUserLoggedIn } from '@shopgate/engage/user';
import { getSwellCustomerPoints } from '../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  firstName: getUserFirstName(state),
  loggedIn: isUserLoggedIn(state),
  points: getSwellCustomerPoints(state),
});

export default connect(mapStateToProps);
