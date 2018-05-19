import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Row, Col, Menu } from 'antd';
import NewsList from './containers/NewsList';
import HomePage from './containers/HomePage';
import NewsPage from './containers/NewsPage';
import FileList from './containers/FileList';
import NotMatch from '../NotMatch';

import './style.css';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Client extends Component {
  render() {
    return (
      <Layout>
        <Header className="client-header" >
          <div className="menu">
            <Menu
              selectedKeys={[]}
              mode="horizontal"
            >
              <Menu.Item key="home">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="lib">
                <Link to="/news/lib">实验室概况</Link>
              </Menu.Item>
              <Menu.Item key="news">
                <Link to="/newsList/qwe">新闻资讯</Link>
              </Menu.Item>
              <Menu.Item key="scientific">
                <Link to="/newsList/qwe">科研平台</Link>
              </Menu.Item>
              <Menu.Item key="personalTraining">
                <Link to="/newsList/qwe">人才培养</Link>
              </Menu.Item>
              <Menu.Item key="cooperation">
                <Link to="/newsList/qwe">合作交流</Link>
              </Menu.Item>
              <Menu.Item key="populationOfscience">
                <Link to="/newsList/qwe">科普宣传</Link>
              </Menu.Item>
              <Menu.Item key="files">
                <Link to="/fileList">资料下载</Link>
              </Menu.Item>
              <Menu.Item key="admin">
                <Link to="/admin/login">内部办公</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content className="client-container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/newsList/:type" component={NewsList} />
            <Route path="/news/:id" component={NewsPage} />
            <Route path="/fileList" component={FileList} />
            <Route component={NotMatch} />
          </Switch>
        </Content>
        <Footer className="client-footer">Footer</Footer>
      </Layout>
    )
  }
}