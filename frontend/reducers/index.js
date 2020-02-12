import { combineReducers } from 'redux';
import customer from './swellCustomer';
import redemptionOptions from './swellRedemptionOptions';

export default combineReducers({
  customer,
  redemptionOptions,
});
