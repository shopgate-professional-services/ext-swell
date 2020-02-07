import {
  REQUEST_SWELL_IDENTIFY_CUSTOMER,
  RECEIVE_SWELL_IDENTIFY_CUSTOMER,
  ERROR_SWELL_IDENTIFY_CUSTOMER,
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
    isFetching: false,
    isError: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SWELL_IDENTIFY_CUSTOMER:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case RECEIVE_SWELL_IDENTIFY_CUSTOMER:
      return {
        ...state,
        data: action.swellCustomer,
        isFetching: false,
        isError: false,
      };
    case ERROR_SWELL_IDENTIFY_CUSTOMER:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case CLEAR_SWELL_CUSTOMER_DATA:
      return {
        ...state,
        data: null,
        isFetching: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default swellCustomer;
