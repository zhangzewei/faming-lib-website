import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Menu } from 'antd';

import './style.css';

class LoginMenu extends Component {
  static propTypes = {
    logined: PropTypes.bool.isRequired,
    userInfo: PropTypes.object.isRequired,
    classNames: PropTypes.string,
    loginPage: PropTypes.string,
    menus: PropTypes.array,
  }

  renderWithLogin = () => {
    const { userAvatar, menus, classNames } = this.props;
    const className = `login-menu ${classNames || ''}`;
    let M = (<Menu.Item disabled key="disabled_1">没有菜单</Menu.Item>);
    if (menus && menus.length) {
      M = menus.map((m, i)=> 
        (<Menu.Item key={`login-menu_${i}`}><Link to={m.link}>{m.text}</Link></Menu.Item>)
      );
    }
    const menu = (<Menu>{M}</Menu>);
    const UserAvatar = userAvatar
      ? <Avatar src={userAvatar} />
      : <Avatar icon="user" />;
    return (
      <Dropdown
        overlay={menu}
        trigger={['hover']}
      >
        <div className={className}>
          {UserAvatar}
        </div>
      </Dropdown>
    );
  }

  renderWithoutLogin = () => {
    const { classNames } = this.props;
    const className = `login-menu_not ${classNames || ''}`;
    return (
      <div className={className}>
        <Link to="/">登录</Link>
        <Link to="/">注册</Link>
      </div>
    );
  }
  
  render() {
    return (
      <div>
        {
          this.props.logined
          ? this.renderWithLogin()
          : this.renderWithoutLogin()
        }
      </div>
    );
  }
}

export default LoginMenu;
