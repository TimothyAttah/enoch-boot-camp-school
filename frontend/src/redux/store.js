import { applyMiddleware, compose, createStore } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware)),
);
