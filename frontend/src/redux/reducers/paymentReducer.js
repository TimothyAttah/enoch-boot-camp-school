import { PAYMENT } from '../types';

const initialState = {
  payment: [],
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT.START_PAYMENT:
    case PAYMENT.GET_PAYMENT:
    case PAYMENT.CREATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};

export default payment;
