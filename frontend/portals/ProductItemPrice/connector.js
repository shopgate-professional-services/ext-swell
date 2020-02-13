import { connect } from 'react-redux';
import { getSwellRedemptionOptionsTypeProductById } from '../../selectors';

/**
 * Maps state to prop
 * @param {Object} state Redux state
 * @param {Object} props Component props
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
  redeemProduct: getSwellRedemptionOptionsTypeProductById(state, props),
});

export default connect(mapStateToProps);
