import { appDidStart$ } from '@shopgate/engage/core';
import { userDidLogout$ } from '@shopgate/engage/user';
import { initiateSwellSdk, identifySwellCustomer } from '../actions';
import { clearSwellCustomerData } from '../action-creators';
import { sdkSetupAndUserDataReceived$ } from '../streams';

export default (subscribe) => {
  subscribe(appDidStart$, ({ dispatch }) => {
    dispatch(initiateSwellSdk());
  });

  subscribe(sdkSetupAndUserDataReceived$, (props) => {
    const { dispatch } = props[0] || {};
    dispatch(identifySwellCustomer());
  });

  subscribe(userDidLogout$, ({ dispatch }) => {
    dispatch(clearSwellCustomerData());
  });
};

