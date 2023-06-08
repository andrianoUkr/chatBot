import { RootState } from '../store';

const getChatList = (state: RootState) => state.chat.chatList;
const getFetchingStatus = (state: RootState) => state.chat.fetchingStatus;

export const chatSelectors = {
  getChatList,
  getFetchingStatus
};
