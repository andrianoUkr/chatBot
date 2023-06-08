import { Layout } from 'antd';

import Profile from 'components/Profile';
import Chat from 'components/Chat';

import styles from './Dashboard.module.scss';

const { Header } = Layout;

const Dashboard = () => {
  return (
    <Layout className={styles.wrapper}>
      <Header className={styles.headerWrapper}>
        <Profile />
      </Header>
      <Layout>
        <Chat />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
