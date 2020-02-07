import jQuery from 'jquery';
import { logger } from '@shopgate/engage/core';
import { getUserData } from '@shopgate/engage/user';
import getSwellSdk from '../helpers/getSwellSdk';
import {
  requestSwellInitiation,
  receiveSwellInitiation,
  errorSwellInitiation,
  requestSwellIdentifyCustomer,
  receiveSwellIdentifyCustomer,
  errorSwellIdentifyCustomer,
} from '../action-creators';
import { SWELL_INITIALIZED, SWELL_SETUP } from '../constants';

/**
 * Initiate Swell SDK action
 * @return {Function}
 */
export const initiateSwellSdk = () => async (dispatch) => {
  dispatch(requestSwellInitiation());

  try {
    const { spapi } = await getSwellSdk() || {};

    spapi.triggerEvent(SWELL_INITIALIZED);

    await new Promise((resolve) => {
      jQuery(document).on(SWELL_INITIALIZED, () => {
        resolve();
      });
    });

    dispatch(receiveSwellInitiation());
  } catch (error) {
    logger.error({ error, errorMessage: error.message }, 'error initializing Swell SDK');

    dispatch(errorSwellInitiation());
  }
};

/**
 * Identify Swell Customer
 * @return {Function}
 */
export const identifySwellCustomer = () => async (dispatch, getState) => {
  const { id, mail } = getUserData(getState()) || {};

  if (!(id && mail)) {
    return;
  }

  dispatch(requestSwellIdentifyCustomer());

  try {
    const { swellAPI } = await getSwellSdk() || {};

    await swellAPI.loginCustomer(mail, id);

    const swellCustomer = await new Promise((resolve) => {
      jQuery(document).on(SWELL_SETUP, () => {
        resolve(swellAPI.getCustomerDetails());
      });
    });

    dispatch(receiveSwellIdentifyCustomer(swellCustomer));
  } catch (error) {
    logger.error({ error, errorMessage: error.message }, 'Error identifying swell customer');
    dispatch(errorSwellIdentifyCustomer());
  }
};
