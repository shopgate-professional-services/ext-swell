import { appDidStart$, logger } from '@shopgate/engage/core';
import { getUserData, userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import {
  clearSwellCustomerData,
  receiveRedemptionOptions,
  receiveSwellCustomer,
  receiveSwellActiveCampaigns,
} from '../action-creators';
import getSwellSdk from '../helpers/getSwellSdk';
import { SWELL_SETUP, SWELL_INIT } from '../constants';

let swellReady = false;
let swellNeedsLogin = true;

/**
 * Login user to swell
 * @param {Object} state state
 */
const loginSwellUser = (state) => {
  const { id, mail } = getUserData(state) || {};

  if (!(id && mail)) {
    return;
  }

  window.swellAPI.loginCustomer(mail, id);
  swellNeedsLogin = false;
};

export default (subscribe) => {
  subscribe(appDidStart$, ({ dispatch, getState }) => {
    try {
      getSwellSdk();
    } catch (error) {
      logger.error({ error, errorMessage: error.message }, 'error initializing Swell SDK');
    }

    document.addEventListener(SWELL_INIT, () => {
      const activeCampaigns = window.swellAPI.getActiveCampaigns();
      dispatch(receiveSwellActiveCampaigns(activeCampaigns));
    });

    document.addEventListener(SWELL_SETUP, () => {
      swellReady = true;
      const redemptionOptions = window.swellAPI.getActiveRedemptionOptions();
      dispatch(receiveRedemptionOptions(redemptionOptions));

      const { id, mail } = getUserData(getState()) || {};

      if (!(id && mail)) {
        return;
      }

      if (swellNeedsLogin) {
        loginSwellUser(getState());
        return;
      }

      const swellCustomer = window.swellAPI.getCustomerDetails();
      dispatch(receiveSwellCustomer(swellCustomer));
    });
  });

  subscribe(userDataReceived$, ({ getState }) => {
    if (!swellReady || !swellNeedsLogin) {
      return;
    }

    loginSwellUser(getState());
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    swellNeedsLogin = true;

    dispatch(clearSwellCustomerData());
  });
};

