import { connect } from 'react-redux';
import { getSwellRedemptionOptionsTypeOther } from '../../selectors';

/**
 * Maps state to prop
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  redemptionOptions: getSwellRedemptionOptionsTypeOther(state),
});

/**
 * Maps action dispatchers to the component props.
 * @param {Function} dispatch The store dispatcher.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps);
