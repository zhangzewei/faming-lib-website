import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import NewsList from './containers/NewsList';
import HomePage from './containers/HomePage';
import NewsPage from './containers/NewsPage';
import FileList from './containers/FileList';

import './style.css';

const { Header, Footer, Sider, Content } = Layout;

export default class Client extends Component {
  render() {
    return (
      <Layout>
        <Header className="client-header" >
          <Link to="/admin/login">后端管理系统</Link>
        </Header>
        <Content className="client-container">
          <Switch>
            <Route path="/newsList/:type" exact component={NewsList} />
            <Route path="/news/:id" exact component={NewsPage} />
            <Route path="/fileList/:id" exact component={FileList} />
            <Route component={HomePage} />
          </Switch>
        </Content>
        <Footer className="client-footer">Footer</Footer>
      </Layout>
    )
  }
}