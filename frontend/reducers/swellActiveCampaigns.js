import {
  RECEIVE_SWELL_ACTIVE_CAMPAIGNS,
  CLEAR_SWELL_ACTIVE_CAMPAIGNS_DATA,
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
    case CLEAR_SWELL_ACTIVE_CAMPAIGNS_DATA:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default swellActiveCampaigns;
