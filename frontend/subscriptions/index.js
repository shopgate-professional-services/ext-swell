import { appDidStart$ } from '@shopgate/engage/core';
import { initiateSwellSdk, identifySwellCustomer } from '../actions';
import { sdkSetupAndUserDataReceived$ } from '../streams';

export default (subscribe) => {
  subscribe(appDidStart$, ({ dispatch }) => {
    dispatch(initiateSwellSdk());
  });

  subscribe(sdkSetupAndUserDataReceived$, (props) => {
    const { dispatch } = props[0] || {};
    dispatch(identifySwellCustomer());
  });
};

