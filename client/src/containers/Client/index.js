import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Row, Col, Menu } from 'antd';
import NewsList from './containers/NewsList';
import HomePage from './containers/HomePage';
import NewsPage from './containers/NewsPage';
import FileList from './containers/FileList';
import SecondPage from './containers/SecondPage';
import {
  LibMenu,
  ScientificMenu,
  NewsMenu,
  PeopleMenu,
  CompareMenu,
  PopulationOfscienceMenu,
  FileMenu,
} from './components/Menus';
import NotMatch from '../NotMatch';

import './style.css';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class Client extends Component {
  render() {
    return (
      <Layout>
        <Header className="client-header" >
          <div className="client-header__img" />
          <div className="client-container menu">
            <Menu
              selectedKeys={[]}
              mode="horizontal"
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Menu.Item key="home">
                <Link to="/">首页</Link>
              </Menu.Item>
              <SubMenu title={<Link to="/secondPage/news/LibMenu:gaikuang/gaikuang">实验室概况</Link>}>
                {LibMenu()}
              </SubMenu>

              <SubMenu title={<Link to="/secondPage/news/ScientificMenu:yanjiu/yanjiu">科研平台</Link>}>
                {ScientificMenu()}
              </SubMenu>
              <SubMenu title={<Link to="/secondPage/newsList/NewsMenu:gongzuo/gongzuo">新闻资讯</Link>}>
                {NewsMenu()}
              </SubMenu>

              <SubMenu title={<Link to="/secondPage/news/PeopleMenu:shuoshi/shuoshi">人才培养</Link>}>
                {PeopleMenu()}
              </SubMenu>
              <SubMenu title={<Link to="/secondPage/news/CompareMenu:jiaoliu/jiaoliu">合作交流</Link>}>
                {CompareMenu()}
              </SubMenu>

              <SubMenu title={<Link to="/secondPage/news/PopulationOfscienceMenu:zhuanzai/zhuanzai">科普宣传</Link>}>
                {PopulationOfscienceMenu()}
              </SubMenu>

              <SubMenu title={<Link to="/secondPage/newsList/FileMenu:wenzhang/wenzhang">资料下载</Link>}>
                {FileMenu()}
              </SubMenu>
              <Menu.Item key="admin">
                <Link to="/admin/login">内部办公</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content className="client-container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/secondPage/:pageType/:menuType/:id" component={SecondPage} />
            <Route component={NotMatch} />
          </Switch>
        </Content>
        <Footer className="client-footer">Footer</Footer>
      </Layout>
    )
  }
}