import { connect } from 'react-redux';
import { fetchProductsById } from '@shopgate/engage/product';
import { getSwellRedemptionOptionsTypeProductIds } from '../../selectors';

/**
 * Maps state to prop
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  redeemProductIds: getSwellRedemptionOptionsTypeProductIds(state),
});

/**
 * Maps action dispatchers to the component props.
 * @param {Function} dispatch The store dispatcher.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  fetchProducts: (ids) => { dispatch(fetchProductsById(ids)); },
});

export default connect(mapStateToProps, mapDispatchToProps);
