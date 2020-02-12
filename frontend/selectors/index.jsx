import { createSelector } from 'reselect';
import { REDUX_NAMES_SPACE_SWELL } from '../constants';

/**
 * @param {Object} state The application State
 * @returns {Object}
 */
export const getSwellState = state =>
  state.extensions[REDUX_NAMES_SPACE_SWELL];

export const getSwellCustomerState = state => getSwellState(state).customer;
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

export const getSwellRedemptionOptionsTypeOther = createSelector(
  getSwellRedemptionOptionsState,
  (redemptionOptions) => {
    if (!redemptionOptions) {
      return [];
    }

    return redemptionOptions.filter(({ discountType }) => discountType !== 'product');
  }
);
