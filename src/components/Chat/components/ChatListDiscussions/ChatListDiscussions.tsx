import { useSelector } from 'react-redux';
import { List, Avatar } from 'antd';

import { chatSelectors, DiscussionType } from 'redux/chat';

import styles from './ChatListDiscussions.module.scss';

type Props = {
  setCurrChatDiscussionId: React.Dispatch<React.SetStateAction<string | null>>;
  currChatDiscussionId: string | null;
};

const ChatListDiscussions = ({
  setCurrChatDiscussionId,
  currChatDiscussionId,
}: Props) => {
  const chatList = useSelector(chatSelectors.getChatList);

  const lastIndexData = (list: DiscussionType[]) =>
    list.length ? list.slice(-1)[0] : null;

  const lastMessageDate = (discussion: DiscussionType[]) => {
    const currTime = lastIndexData(discussion)?.time || '';
    const timestamp = Date.parse(currTime);

    return !!timestamp ? new Date(currTime).toDateString() : null;
  };

  if (!chatList.length) {
    return (
      <div className={styles.defaultWrapper}>
        <b>Sorry, it's empty here</b>
      </div>
    );
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={chatList}
      renderItem={({ chatInfo, discussion }) => (
        <List.Item
          className={`${styles.listItemWrapper} ${
            currChatDiscussionId === chatInfo.userId ? 'active' : ''
          }`}
          onClick={() => setCurrChatDiscussionId(chatInfo.userId)}
        >
          <List.Item.Meta
            className={styles.itemMetaWrapper}
            avatar={<Avatar>{chatInfo.avatar}</Avatar>}
            title={chatInfo.userName}
            description={lastIndexData(discussion)?.message}
          />
          <div>{lastMessageDate(discussion)}</div>
        </List.Item>
      )}
    />
  );
};

export default ChatListDiscussions;
