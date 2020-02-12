import { createSelector } from 'reselect';
import { REDUX_NAMES_SPACE_SWELL } from '../constants';

/**
 * @param {Object} state The application State
 * @returns {Object}
 */
export const getSwellState = state =>
  state.extensions[REDUX_NAMES_SPACE_SWELL];

/**
 * @param {Object} state The application State
 * @returns {Object}
 */
export const getSwellActiveCampaignsState = state => getSwellState(state).activeCampaigns;

export const getSwellActiveCampaigns = createSelector(
  getSwellActiveCampaignsState,
  (activeCampaigns) => {
    const { data = null } = activeCampaigns || {};

    return data;
  }
);
