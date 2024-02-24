import { USER_TYPE } from '../types';

const initialState = {
  auth: [],
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPE.REGISTER_USER:
    case USER_TYPE.LOGIN_USER:
      return {
        ...state,
        auth: [action.payload, ...state.auth],
      };
    default: {
      return state;
    }
  }
};
