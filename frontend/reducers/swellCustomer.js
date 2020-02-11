import {
  RECEIVE_SWELL_CUSTOMER,
  CLEAR_SWELL_CUSTOMER_DATA,
} from '../constants';

/**
 * Swell Customer Reducer
 * @param {Object} state State.
 * @param {Object} action Action.
 * @returns {Object}
 */
const swellCustomer = (
  state = {
    data: null,
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_SWELL_CUSTOMER:
      return {
        ...state,
        data: action.swellCustomer,
      };
    case CLEAR_SWELL_CUSTOMER_DATA:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default swellCustomer;
