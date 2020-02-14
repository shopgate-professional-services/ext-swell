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

/**
 * Get Swell Customer State
 * @param {Object} state Redux state
 * @return {Object}
 */
export const getSwellCustomerState = state => getSwellState(state).customer;

/**
 * Get Swell Redemption Option State
 * @param {Object} state Redux state
 * @return {Object}
 */
export const getSwellRedemptionOptionsState = state => getSwellState(state).redemptionOptions;

export const getSwellCustomerIsFetching = createSelector(
  getSwellCustomerState,
  swellCustomer => swellCustomer.isFetching
);

export const getSwellCustomerData = createSelector(
  getSwellCustomerState,
  (swellCustomer) => {
    const { data = null } = swellCustomer || {};

    return data;
  }
);

export const getSwellCustomerPoints = createSelector(
  getSwellCustomerData,
  (data) => {
    const { pointsBalance = null } = data || {};

    return pointsBalance;
  }
);

export const getSwellRedemptionOptionsTypeProducts = createSelector(
  getSwellRedemptionOptionsState,
  (redemptionOptions) => {
    if (!redemptionOptions) {
      return [];
    }

    return redemptionOptions.filter(({ discountType }) => discountType === 'product');
  }
);

export const getSwellRedemptionOptionsTypeProductIds = createSelector(
  getSwellRedemptionOptionsTypeProducts,
  redemptionProducts => redemptionProducts.map(({ appliesToId }) => appliesToId)
);

export const getSwellRedemptionOptionsTypeProductById = createSelector(
  getSwellRedemptionOptionsTypeProducts,
  (_, { productId }) => productId,
  (redemptionProducts, productId) => (
    redemptionProducts.find(({ appliesToId }) => `${appliesToId}` === productId) || null
  )
);

export const getSwellRedemptionOptionsTypeOther = createSelector(
  getSwellRedemptionOptionsState,
  (redemptionOptions) => {
    if (!redemptionOptions) {
      return [];
    }

    return redemptionOptions.filter(({ discountType }) => discountType !== 'product');
  }
);
