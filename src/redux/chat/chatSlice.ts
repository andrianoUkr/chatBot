import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TYPE_REDUCER, ADD_NEW_MESSAGE_ACTION, FAKE_DATA, ADD_NEW_CHAT_ACTION } from './chatConst';
import { ChatListType, ChatItemType, DiscussionType } from 'types/chatTypes';
import { getNewMessage } from './chatThunks';
import { FetchingStatus } from 'types/common';

type MessageType = DiscussionType & { chatBoxId: string };

const initialState: ChatListType = FAKE_DATA;

const chatSlice = createSlice({
  name: TYPE_REDUCER,
  initialState,
  reducers: {
    [ADD_NEW_MESSAGE_ACTION]: (state: ChatListType, action: PayloadAction<MessageType>) => {
      const { chatBoxId, ...discussionData } = action.payload;

      const currStateChat = state.chatList.find((item) => item.chatInfo.userId === chatBoxId);

      currStateChat?.discussion.push(discussionData);
    },

    [ADD_NEW_CHAT_ACTION]: (state: ChatListType, action: PayloadAction<ChatItemType>) => {
      const newChat = action.payload;

      state.chatList.push(newChat);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewMessage.pending, (state) => {
        state.fetchingStatus = FetchingStatus.Pending;
      })
      .addCase(getNewMessage.fulfilled, (state) => {
        state.fetchingStatus = FetchingStatus.Fulfilled;
      })
      .addCase(getNewMessage.rejected, (state, action) => {
        const { error } = action;
        state.fetchingStatus = FetchingStatus.Rejected;
        state.error = {
          text: error.message,
          code: error.name,
        };
      });
  },
});

export const chatReducer = chatSlice.reducer;
