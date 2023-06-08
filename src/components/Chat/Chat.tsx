import { useState } from 'react';
import { Layout } from 'antd';

import ChatListDiscussions from 'components/Chat/components/ChatListDiscussions';
import ChatCurrentDiscussion from 'components/Chat/components/ChatCurrentDiscussion';
import AddNewChat from 'components/Chat/components/AddNewChat';

import styles from './Chat.module.scss';

const { Content, Sider } = Layout;

const Chat = () => {
  const [currChatDiscussionIdState, setCurrChatDiscussionIdState] = useState<string | null>(null);

  return (
    <>
      <Sider className={styles.siderWrapper} theme='light' width='300'>
        <AddNewChat setCurrChatDiscussionId={setCurrChatDiscussionIdState} />
        <ChatListDiscussions
          setCurrChatDiscussionId={setCurrChatDiscussionIdState}
          currChatDiscussionId={currChatDiscussionIdState}
        />
      </Sider>
      <Content className={styles.contentWrapper}>
        <ChatCurrentDiscussion currChatDiscussionId={currChatDiscussionIdState} />
      </Content>
    </>
  );
};

export default Chat;
