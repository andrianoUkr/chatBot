import { createAsyncThunk } from '@reduxjs/toolkit';

import { TYPE_REDUCER, GET_NEW_CHAT_THUNK } from './chatConst';
import { fetchNewMessage } from 'api/chatApi';
import { chatActions } from './chatAction';

export const getNewMessage = createAsyncThunk(
  `${TYPE_REDUCER}/${GET_NEW_CHAT_THUNK}`,
  async (chatBoxId: string, asyncThunkConfig) => {
    const response = await fetchNewMessage();

    asyncThunkConfig.dispatch(
      chatActions.addNewMessage({
        authorId: chatBoxId,
        chatBoxId: chatBoxId,
        message: response.text,
      }),
    );

    return response.text;
  },
);
