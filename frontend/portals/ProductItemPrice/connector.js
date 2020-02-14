import { connect } from 'react-redux';
import { getSwellRedemptionOptionsTypeProductByProductId } from '../../selectors';

/**
 * Maps state to prop
 * @param {Object} state Redux state
 * @param {Object} props Component props
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
  redeemProduct: getSwellRedemptionOptionsTypeProductByProductId(state, props),
});

export default connect(mapStateToProps);
