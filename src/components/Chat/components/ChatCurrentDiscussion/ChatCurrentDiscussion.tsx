import { useState } from 'react';
import { Input, Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from 'redux/store';
import ChatListMessages from 'components/Chat/components/ChatListMessages';
import { chatActions, chatThunks } from 'redux/chat';
import { profileSelectors } from 'redux/profile';
import { NewMessageType } from 'types/chatTypes';

import styles from './ChatCurrentDiscussion.module.scss';

const { TextArea } = Input;

type Props = {
  currChatDiscussionId: string | null;
};

const ChatCurrentDiscussion = ({ currChatDiscussionId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [textState, setTextState] = useState('');

  const { userId: profileId } = useSelector(profileSelectors.getProfileData);

  const getNewMessageAction = (chatBoxId: string) => dispatch(chatThunks.getNewMessage(chatBoxId));

  const addNewMessageAction = (data: NewMessageType) =>
    dispatch(chatActions.addNewMessage(data));

  const addNewMessageHandler = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
    currChatDiscussionId: string,
  ) => {
    if (event.nativeEvent.code === 'Enter' && !event.nativeEvent.shiftKey) {
      event.preventDefault();
      addNewMessageAction({
        chatBoxId: currChatDiscussionId,
        authorId: profileId,
        message: event.currentTarget.value,
      });
      setTextState('');

      // call getting a new message from BE
      setTimeout(async () => {
        await getNewMessageAction(currChatDiscussionId);
      }, 1000);
    }
  };
  if (!currChatDiscussionId) {
    return (
      <div className={styles.noChatWrapper}>
        <b>Select a chat to start messaging</b>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ChatListMessages currChatDiscussionId={currChatDiscussionId} />
      <Tooltip placement='topLeft' title={'writing a message ...'} />
      <TextArea
        value={textState}
        placeholder='Write a message...'
        onChange={(event) => setTextState(event.target.value)}
        onKeyDown={(event) => addNewMessageHandler(event, currChatDiscussionId)}
        autoSize={{ minRows: 2, maxRows: 5 }}
      />
    </div>
  );
};

export default ChatCurrentDiscussion;
