import {
  RECEIVE_SWELL_ACTIVE_CAMPAIGNS,
} from '../constants';

/**
 * Swell Active Campaigns Reducer
 * @param {Object} state State.
 * @param {Object} action Action.
 * @returns {Object}
 */
const swellActiveCampaigns = (
  state = {
    data: null,
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_SWELL_ACTIVE_CAMPAIGNS:
      return {
        ...state,
        data: action.activeCampaigns,
      };
    default:
      return state;
  }
};

export default swellActiveCampaigns;
