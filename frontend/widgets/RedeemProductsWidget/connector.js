import { connect } from 'react-redux';
import { fetchProductsById } from '@shopgate/engage/product';

/**
 * Maps state to prop
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  productIds: ['4506274168963', '4506288455811', '4506267648131', '4506281640067'],
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
