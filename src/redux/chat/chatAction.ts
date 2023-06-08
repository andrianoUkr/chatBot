import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { TYPE_REDUCER, ADD_NEW_MESSAGE_ACTION, ADD_NEW_CHAT_ACTION } from './chatConst';
import { NewMessageType, ChatItemType } from 'types/chatTypes';

const addNewMessage = createAction(
  `${TYPE_REDUCER}/${ADD_NEW_MESSAGE_ACTION}`,
  ({ chatBoxId, authorId, message }: NewMessageType) => {
    return {
      payload: {
        chatBoxId,
        authorId,
        message,
        messageId: uuidv4(),
        time: new Date().toJSON(),
      },
    };
  },
);

const addNewChat = createAction(`${TYPE_REDUCER}/${ADD_NEW_CHAT_ACTION}`, (chatBox: ChatItemType) => {
  return {
    payload: chatBox,
  };
});

export const chatActions = {
  addNewMessage,
  addNewChat,
};
