import { appDidStart$, logger } from '@shopgate/engage/core';
import { getUserData, userDataReceived$, userDidLogout$ } from '@shopgate/engage/user';
import {
  clearSwellCustomerData,
  receiveSwellCustomer,
} from '../action-creators';
import getSwellSdk from '../helpers/getSwellSdk';
import { SWELL_INITIALIZED, SWELL_SETUP } from '../constants';

let swellReady = false;
let swellNeedsLogin = true;

const loginSwellUser = async (state) => {
  const { id, mail } = getUserData(state) || {};

  if (!(id && mail)) {
    return;
  }

  const { swellAPI } = await getSwellSdk() || {};

  console.warn('loginCustomer');
  swellAPI.loginCustomer(mail, id);
  swellNeedsLogin = false;
};

export default (subscribe) => {
  subscribe(appDidStart$, async ({ dispatch, getState }) => {
    try {
      getSwellSdk();
    } catch (error) {
      logger.error({ error, errorMessage: error.message }, 'error initializing Swell SDK');
    }

    document.addEventListener(SWELL_INITIALIZED, () => {
      console.warn(SWELL_INITIALIZED);
    });

    document.addEventListener(SWELL_SETUP, () => {
      swellReady = true;
      console.warn(SWELL_SETUP);

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

  subscribe(userDataReceived$, async ({ getState }) => {
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

