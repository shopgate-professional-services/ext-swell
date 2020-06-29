import { connect } from 'react-redux';
import { getSwellRedemptionOptionsTypeOther } from '../../selectors';
import refreshSwell from '../../helpers/refreshSwell';

/**
 * Map state to props
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  redeemOptions: getSwellRedemptionOptionsTypeOther(state),
  refreshSwell,
});

export default connect(mapStateToProps);
