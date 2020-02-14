import { combineReducers } from 'redux';
import customer from './swellCustomer';
import activeCampaigns from './swellActiveCampaigns';
import redemptionOptions from './swellRedemptionOptions';

export default combineReducers({
  customer,
  activeCampaigns,
  redemptionOptions,
});
