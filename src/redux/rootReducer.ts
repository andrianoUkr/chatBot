import { combineReducers } from '@reduxjs/toolkit';

import { profileReducer } from 'redux/profile';
import { chatReducer } from 'redux/chat';

const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
});
export default rootReducer;
