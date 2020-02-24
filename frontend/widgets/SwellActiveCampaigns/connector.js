import { connect } from 'react-redux';
import { getSwellActiveCampaigns } from '../../selectors';

/**
 * @param {Object} state Redux state
 * @return {Object}
 */
const mapStateToProps = state => ({
  activeCampaigns: getSwellActiveCampaigns(state),
});

export default connect(mapStateToProps);
