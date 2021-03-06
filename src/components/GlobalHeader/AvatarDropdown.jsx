import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class AvatarDropdown extends React.Component {
  onMenuClick = (event) => {
    const { key } = event;
    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    } else if (key === 'settings') {
      history.push(`/settings/general`);
    }
  };

  render() {
    const { currentUser, menu } = this.props;

    console.log('currr', currentUser);

    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {/*{menu && (*/}
        {/*  <Menu.Item key="center">*/}
        {/*    <UserOutlined />*/}
        {/*    个人中心*/}
        {/*  </Menu.Item>*/}
        {/*)}*/}
        {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            Account Settings
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        <Menu.Item key="logout">
          <LogoutOutlined />
          Logout
        </Menu.Item>
      </Menu>
    );
    return currentUser ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar
            size="small"
            className={styles.avatar}
            src={currentUser?.profileImage}
            alt="avatar"
          />
          <span className={`${styles.name} anticon`}>
            {currentUser?.firstName ? currentUser?.firstName : currentUser?.firstName}
          </span>
        </span>
      </HeaderDropdown>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
