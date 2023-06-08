import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { CommentOutlined } from '@ant-design/icons';

import { AppDispatch } from 'redux/store';
import { chatActions, ChatItemType, chatThunks } from 'redux/chat';
import { LIST_CHATBOT_NAMES } from 'redux/chat/chatConst';

import styles from './AddNewChat.module.scss';

type Props = {
  setCurrChatDiscussionId: React.Dispatch<React.SetStateAction<string | null>>;
};

const AddNewChat = ({ setCurrChatDiscussionId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const addNewChatAction = (chatBox: ChatItemType) => {
    dispatch(chatActions.addNewChat(chatBox));
  };

  const getNewMessageAction = async (chatBoxId: string) =>
    dispatch(chatThunks.getNewMessage(chatBoxId))

  const addNewChatHandler = async () => {
    const randomKey = Math.floor(Math.random() * (LIST_CHATBOT_NAMES.length - 0) + 0);
    const chatInfo = {
      userName: LIST_CHATBOT_NAMES[randomKey],
      userId: uuidv4(),
      avatar: 'Bot',
    };

    addNewChatAction({ chatInfo, discussion: [] });
    setCurrChatDiscussionId(chatInfo.userId);
    await getNewMessageAction(chatInfo.userId);
  };

  return (
    <div className={styles.wrapper}>
      <Button icon={<CommentOutlined />} size='large' block onClick={addNewChatHandler}>
        Add Chat
      </Button>
    </div>
  );
};

export default AddNewChat;
