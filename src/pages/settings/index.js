import { Tabs } from 'antd';
import styles from './styles.less';
import ProfileInformation from './profile-information';
import ChangePassword from './change-password';
import {connect} from "umi";

const { TabPane } = Tabs;
const Index = ({ user }) => {
  return (
    <div className={styles.main}>
      <Tabs defaultActiveKey="profile" tabPosition={'left'}>
        <TabPane tab={`Profile Information`} key={'profile'}>
          <ProfileInformation />
        </TabPane>
        <TabPane tab={`Change Password`} key={'password'}>
          <ChangePassword />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default connect(({user}) => ({
  user: user.currentUser
}))(Index);
