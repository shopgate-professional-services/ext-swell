import jQuery from 'jquery';
import { Observable } from 'rxjs';
import { userDataReceived$ } from '@shopgate/engage/user';
import { SWELL_SETUP } from '../constants';

// add jQuery toObservable plugin
jQuery.fn.toObservable = function (eventName, selector) {
  return Observable.fromEvent(this, eventName, selector);
};

export const swellSdkSetup$ = jQuery(document).toObservable(SWELL_SETUP);

export const sdkSetupAndUserDataReceived$ = Observable.zip(userDataReceived$, swellSdkSetup$);
