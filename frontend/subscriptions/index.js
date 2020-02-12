import { appDidStart$, logger } from '@shopgate/engage/core';
import { getUserData, userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import {
  clearSwellCustomerData,
  receiveSwellCustomer,
  receiveSwellActiveCampaigns,
  clearSwellActiveCampaignsData,
} from '../action-creators';
import getSwellSdk from '../helpers/getSwellSdk';
import { SWELL_SETUP } from '../constants';

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

    document.addEventListener(SWELL_SETUP, () => {
      swellReady = true;

      const { id, mail } = getUserData(getState()) || {};

      const activeCampaigns = window.swellAPI.getActiveCampaigns();
      dispatch(receiveSwellActiveCampaigns(activeCampaigns));

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
    dispatch(clearSwellActiveCampaignsData());
  });
};

