import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import * as clientAction from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';
import DashBoard from '../DashBoard';
import NewsList from '../NewsList';
import FileList from '../FileList';
import NotMatch from '../NotMatch';
import NewsEditer from '../NewsEditer';
import Users from '../Users';
import UserDetails from '../Users/detail';
import Pictures from '../Pictures';
import PicDetails from '../Pictures/detail';
import MenuManager from '../MenuManager';

import './style.css';

const { Header, Sider, Content } = Layout;

const mapStateToProps = ({Admin}) => {
  return {
    state: Admin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clientAction, dispatch)
  }
}

class App extends Component {
  state = {
    collapsed: false,
    selectedMenu: this.props.location.pathname.split('/')[2] || 'dashboard',
  };

  componentDidMount() {
    const userJson = window.localStorage.getItem('user');
    const userInLocalStorage = JSON.parse(userJson);
    this.props.actions.loginByLocalStorage(userInLocalStorage);
  }

  componentWillReceiveProps(nextProps) {
    const selectedMenu =
      nextProps.location.pathname.split('/')[2] || 'dashboard';
    this.setState({ selectedMenu });
  }

  menuOnClick = ({ key }) => {
    if(key === 'log-out') {
      this.props.actions.logOut();
      window.localStorage.removeItem('user');
    }
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
            <Icon type="bars" />
            <span>仪表盘</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="newsList">
          <Link to="/admin/newsList">
            <Icon type="video-camera" />
            <span>新闻列表</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="fileList">
          <Link to="/admin/fileList">
            <Icon type="upload" />
            <span>文件列表</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/admin/users">
            <Icon type="user" />
            <span>用户管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="pictures">
          <Link to="/admin/pictures">
            <Icon type="picture" />
            <span>轮播图管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="menuManager">
          <Link to="/admin/menuManager">
            <Icon type="menu-unfold" />
            <span>菜单管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    const { user } = this.props.state.toJS();
    const logined = _get(user, 'logined', '');

    if(!logined) {
      clientAction.openNotificationWithIcon('error', '登录', '请登录之后访问系统。')
      return (<Redirect to="/"/>);
    }

    const menu = (<Menu
      onClick={this.menuOnClick}
    >
      <Menu.Item key="log-out">
        登出
      </Menu.Item>
    </Menu>);
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
              flexDirection: 'row-reverse',
            }}
          >
            <Dropdown
              overlay={menu}
              trigger={['hover']}
            >
              <div className="login-menu">
                您好，{user.name || '管理员'}
              </div>
            </Dropdown>
          </Header>
          <Content style={{
              margin: '24px 16px',
              padding: 24, 
              background: '#fff', 
              minHeight: 280,
              height: '100%',
              overflow: 'auto'
            }}>
            <Switch>
              <Route path='/admin' exact component={DashBoard} />
              <Route path='/admin/newsList' exact component={NewsList} />
              <Route path='/admin/fileList' exact component={FileList} />
              <Route path='/admin/newsEdit/:id' exact component={NewsEditer} />
              <Route path='/admin/users' exact component={Users} />
              <Route path='/admin/userEdit/:id' exact component={UserDetails} />
              <Route path='/admin/pictures' exact component={Pictures} />
              <Route path='/admin/picEdit' exact component={PicDetails} />
              <Route path='/admin/menuManager' exact component={MenuManager} />
              <Route component={NotMatch} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
