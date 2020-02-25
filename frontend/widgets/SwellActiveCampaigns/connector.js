import { connect } from 'react-redux';
import { getSwellActiveCampaigns } from '../../selectors';
import refreshSwell from '../../helpers/refreshSwell';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  activeCampaigns: getSwellActiveCampaigns(state),
  refreshSwell,
});

export default connect(mapStateToProps);
