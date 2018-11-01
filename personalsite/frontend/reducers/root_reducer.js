import { combineReducers } from 'redux';

import MessageReducer from './message_reducer';

const RootReducer = combineReducers({
  message: MessageReducer
});

export default RootReducer;
