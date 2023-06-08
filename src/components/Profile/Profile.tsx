import { useSelector, useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { CheckOutlined, HighlightOutlined } from '@ant-design/icons';

import { profileActions, profileSelectors } from 'redux/profile';

import styles from './Profile.module.scss';

const { Paragraph } = Typography;

const Profile = () => {
  const dispatch = useDispatch();

  const setUserNameAction = (userName: string) =>
    userName.length && dispatch(profileActions.setUserName(userName));

  const userName = useSelector(profileSelectors.getUserName);

  return (
    <Paragraph
      className={styles.ParagraphWrapper}
      editable={{
        icon: <HighlightOutlined />,
        tooltip: 'click to edit text',
        onChange: setUserNameAction,
        enterIcon: <CheckOutlined />,
      }}
    >
      {userName}
    </Paragraph>
  );
};

export default Profile;
