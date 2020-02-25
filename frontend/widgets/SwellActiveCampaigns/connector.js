import { connect } from 'react-redux';
import { openPageExtern } from '@shopgate/engage/core';
import { getSwellActiveCampaigns } from '../../selectors';
import refreshSwell from '../../helpers/refreshSwell';
import getSwellPopup from '../../helpers/getSwellPopup';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  activeCampaigns: getSwellActiveCampaigns(state),
  refreshSwell,
  getSwellPopup,
});

/**
 * Connects the dispatch function to a callable function in the props.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = () => ({
  openPageExtern: src => openPageExtern({ src }),
});

export default connect(mapStateToProps, mapDispatchToProps);
