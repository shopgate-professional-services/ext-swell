import { createSelector } from 'reselect';
import { REDUX_NAMES_SPACE_SWELL_CUSTOMER } from '../constants';

/**
 * @param {Object} state The application State
 * @returns {Object}
 */
export const getSwellCustomerState = state =>
  state.extensions[REDUX_NAMES_SPACE_SWELL_CUSTOMER];

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
