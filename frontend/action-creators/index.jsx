import {
  REQUEST_SWELL_INITIATION,
  RECEIVE_SWELL_INITIATED,
  ERROR_SWELL_INITIATED,
  RECEIVE_SWELL_IDENTIFY_CUSTOMER,
  REQUEST_SWELL_IDENTIFY_CUSTOMER,
  ERROR_SWELL_IDENTIFY_CUSTOMER,
  CLEAR_SWELL_CUSTOMER_DATA,
} from '../constants';

/**
 * Request Swell initiation
 * @return {Object}
 */
export const requestSwellInitiation = () => ({
  type: REQUEST_SWELL_INITIATION,
});

/**
 * Receive Swell initiation
 * @return {Object}
 */
export const receiveSwellInitiation = () => ({
  type: RECEIVE_SWELL_INITIATED,
});

/**
 * Error Swell initiation
 * @return {Object}
 */
export const errorSwellInitiation = () => ({
  type: ERROR_SWELL_INITIATED,
});

/**
 * Request swell id customer
 * @return {Object}
 */
export const requestSwellIdentifyCustomer = () => ({
  type: REQUEST_SWELL_IDENTIFY_CUSTOMER,
});

/**
 * Receive swell id customer
 * @param {Object} swellCustomer Swell customer
 * @return {Object}
 */
export const receiveSwellIdentifyCustomer = swellCustomer => ({
  type: RECEIVE_SWELL_IDENTIFY_CUSTOMER,
  swellCustomer,
});

/**
 * Error swell id customer
 * @return {Object}
 */
export const errorSwellIdentifyCustomer = () => ({
  type: ERROR_SWELL_IDENTIFY_CUSTOMER,
});

/**
 * Clear swell customer data
 * @return {Object}
 */
export const clearSwellCustomerData = () => ({
  type: CLEAR_SWELL_CUSTOMER_DATA,
});
