import { connect } from 'react-redux';
import { getSwellRedemptionOptionsTypeOther } from '../../selectors';

/**
 * Map state to props
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  redeemOptions: getSwellRedemptionOptionsTypeOther(state),
});

export default connect(mapStateToProps);
