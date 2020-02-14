import {
  RECEIVE_SWELL_CUSTOMER,
  CLEAR_SWELL_CUSTOMER_DATA,
  RECEIVE_SWELL_ACTIVE_CAMPAIGNS,
  RECEIVE_REDEMPTION_OPTIONS,
} from '../constants';

/**
 * Receive swell id customer
 * @param {Object} swellCustomer Swell customer
 * @return {Object}
 */
export const receiveSwellCustomer = swellCustomer => ({
  type: RECEIVE_SWELL_CUSTOMER,
  swellCustomer,
});

/**
 * Receive swell id customer
 * @param {Array} redemptionOptions Swell getActiveRedemptionOptions
 * @return {Object}
 */
export const receiveRedemptionOptions = redemptionOptions => ({
  type: RECEIVE_REDEMPTION_OPTIONS,
  redemptionOptions,
});

/**
 * Clear swell customer data
 * @return {Object}
 */
export const clearSwellCustomerData = () => ({
  type: CLEAR_SWELL_CUSTOMER_DATA,
});

/**
 * Receive swell active campaigns data
 * @param {Object} activeCampaigns Swell activeCampaigns info
 * @return {Object}
 */
export const receiveSwellActiveCampaigns = activeCampaigns => ({
  type: RECEIVE_SWELL_ACTIVE_CAMPAIGNS,
  activeCampaigns,
});
