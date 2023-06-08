import { useSelector } from 'react-redux';
import { List, Avatar } from 'antd';

import { profileSelectors } from 'redux/profile';
import { ChatItemType, DiscussionType } from 'redux/chat';

import styles from './ChatMessage.module.scss';
import { useMemo } from 'react';

type Props = {
  currChatDiscussionData: ChatItemType;
  messageData: DiscussionType;
};

const ChatMessage = ({ messageData, currChatDiscussionData }: Props) => {
  const { authorId, message, time } = messageData;

  const {
    userId: profileId,
    userName: profileName,
    avatar: profileAvatar,
  } = useSelector(profileSelectors.getProfileData);

  const {
    userId: chatBoxId,
    userName: chatBoxName,
    avatar: chatBoxAvatar,
  } = currChatDiscussionData.chatInfo;

  const messageDate = (time = '') => {
    const timestamp = Date.parse(time);

    return !!timestamp ? new Date(time).toLocaleString() : null;
  };

  const getAuthorData = useMemo(() => {
    let authorData: {
      avatar: string | null;
      userName: string | null;
    } = {
      avatar: null,
      userName: null,
    };

    switch (authorId) {
      case profileId:
        authorData = { avatar: profileAvatar, userName: profileName };
        break;
      case chatBoxId:
        authorData = { avatar: chatBoxAvatar, userName: chatBoxName };
        break;
      default:
        break;
    }

    return authorData;
  }, [authorId, chatBoxAvatar, chatBoxId, chatBoxName, profileAvatar, profileId, profileName]);

  return (
    <List.Item className={styles.itemWrapper}>
      <List.Item.Meta
        className={styles.itemMetaWrapper}
        avatar={<Avatar>{getAuthorData.avatar}</Avatar>}
        title={getAuthorData.userName}
        description={message}
      />
      <div>{messageDate(time)}</div>
    </List.Item>
  );
};

export default ChatMessage;
