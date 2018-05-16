import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import './style.css';

const { Header, Footer, Sider, Content } = Layout;

export default class Client extends Component {
  render() {
    return (
      <Layout>
        <Header className="client-header" />
        <Content className="client-container">
          <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
          </Row>
          <Link to="/admin/login">后端管理系统</Link>
        </Content>
        <Footer className="client-footer">Footer</Footer>
      </Layout>
    )
  }
}