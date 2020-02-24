import {
  RECEIVE_REDEMPTION_OPTIONS,
  CLEAR_REDEMPTION_OPTIONS,
} from '../constants';

/**
 * Swell RedemptionOptions Reducer
 * @param {Object} state State.
 * @param {Object} action Action.
 * @returns {Object}
 */
const swellRedemptionOptions = (
  state = null,
  action
) => {
  switch (action.type) {
    case RECEIVE_REDEMPTION_OPTIONS:
      return action.redemptionOptions;
    case CLEAR_REDEMPTION_OPTIONS:
      return null;
    default:
      return state;
  }
};

export default swellRedemptionOptions;
