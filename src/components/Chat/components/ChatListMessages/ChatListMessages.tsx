import { memo } from 'react';
import { List, Skeleton } from 'antd';
import { useSelector } from 'react-redux';

import ChatMessage from 'components/Chat/components/ChatMessage';
import { chatSelectors } from 'redux/chat';
import { useChatScroll } from 'hooks/useChatScroll';
import { FetchingStatus } from 'types/common';

import styles from './ChatListMessages.module.scss';

type Props = {
  currChatDiscussionId: string | null;
};

const ChatListMessages = ({ currChatDiscussionId }: Props) => {
  const chatListDiscussions = useSelector(chatSelectors.getChatList);
  const fetchingStatus = useSelector(chatSelectors.getFetchingStatus);

  const currChatDiscussionData = chatListDiscussions.find(
    ({ chatInfo }) => chatInfo.userId === currChatDiscussionId,
  );

  const ref = useChatScroll(currChatDiscussionData?.discussion, fetchingStatus);

  return (
    <div ref={ref} className={styles.listMessagesWrapper}>
      {currChatDiscussionData?.discussion.length ? (
        <List
          itemLayout='horizontal'
          dataSource={currChatDiscussionData.discussion}
          renderItem={(messageData) => (
            <ChatMessage messageData={messageData} currChatDiscussionData={currChatDiscussionData} />
          )}
        />
      ) : null}
      <Skeleton
        loading={fetchingStatus === FetchingStatus.Pending}
        title={{ width: '100%' }}
        active
        avatar
        paragraph={{ rows: 1 }}
      />
    </div>
  );
};

export default memo(ChatListMessages);
