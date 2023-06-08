import { FetchingStatus } from 'types/common';

export const TYPE_REDUCER = 'chat';
export const ADD_NEW_MESSAGE_ACTION = 'addNewMessage';
export const ADD_NEW_CHAT_ACTION = 'addNewChat';
export const GET_NEW_CHAT_THUNK = 'getNewMessage';

export const FAKE_DATA = {
  chatList: [],
  fetchingStatus: FetchingStatus.Initial,
  error: {
    text: '',
    code: '',
  },
};

export const LIST_CHATBOT_NAMES = [
  'Shirley',
  'Reid',
  'Jayla',
  'Cali',
  'Rory',
  'Kimora',
  'Justice',
];
