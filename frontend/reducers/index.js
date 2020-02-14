import { combineReducers } from 'redux';
import customer from './swellCustomer';
import activeCampaigns from './swellActiveCampaigns';

export default combineReducers({
  customer,
  activeCampaigns,
});
