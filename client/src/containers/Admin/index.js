import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import LoginMenu from '../LoginMenu';
import DashBoard from '../DashBoard';
import Users from '../Users';
import Orders from '../Orders';
import Goods from '../Goods';
import NotMatch from '../NotMatch';
import UserDetail from '../Users/detail';

import './style.css';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
    selectedMenu: this.props.location.pathname.split('/')[2] || 'dashboard',
  };

  componentWillReceiveProps(nextProps) {
    const selectedMenu =
      nextProps.location.pathname.split('/')[2] || 'dashboard';
    this.setState({ selectedMenu });
  }

  renderSideMenu = () => {
    const { selectedMenu } = this.state;
    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedMenu]}
      >
        <Menu.Item key="dashboard">
          <Link to="/admin">
            <Icon type="user" />
            <span>仪表盘</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="goods">
          <Link to="/admin/goods">
            <Icon type="video-camera" />
            <span>货物管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to="/admin/orders">
            <Icon type="upload" />
            <span>订单管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/admin/users">
            <Icon type="user" />
            <span>用户管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <Layout style={{
        width: '100%',
        height: '100%'
      }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">xxx管理系统</div>
          {this.renderSideMenu()}
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <LoginMenu
              menus={[
                {text: '用户管理', link: '/admin/userManage'},
                {text: '前端页面', link: '/'},
                {text: '登出', link: '/admin/login'}
              ]}
              userAvatar="https://avatars.githubusercontent.com/u/12976145?v=3"
              logined
            />
          </Header>
          <Content style={{
              margin: '24px 16px',
              padding: 24, 
              background: '#fff', 
              minHeight: 280, 
              height: '100%',
            }}>
            <Switch>
              <Route path='/admin' exact component={DashBoard} />
              <Route path='/admin/users' exact component={Users} />
              <Route path='/admin/orders' exact component={Orders} />
              <Route path='/admin/goods' exact component={Goods} />
              <Route path='/admin/users/detail' exact component={UserDetail} />
              <Route component={NotMatch} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
