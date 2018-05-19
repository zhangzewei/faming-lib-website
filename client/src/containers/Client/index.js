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
              <SubMenu title={<Link to="/news/lib:gaikuang">实验室概况</Link>}>
                  <Menu.Item key="lib:gaikuang">
                    <Link to="/news/lib:gaikuang">实验室概况</Link>
                  </Menu.Item>
                  <Menu.Item key="lib:lingdao">
                    <Link to="/news/lib:lingdao">领导</Link>
                  </Menu.Item>
                  <Menu.Item key="lib:tuandui">
                    <Link to="/news/lib:tuandui">团队介绍</Link>
                  </Menu.Item>
                  <Menu.Item key="lib:jigou">
                    <Link to="/news/lib:jigou">机构设置</Link>
                  </Menu.Item>
                  <Menu.Item key="lib:jichujianshe">
                    <Link to="/news/lib:jichujianshe">基地建设</Link>
                  </Menu.Item>
              </SubMenu>
              <SubMenu title={<Link to="/news/scientific:yanjiu">科研平台</Link>}>
                <Menu.Item key="scientific:yanjiu">
                  <Link to="/news/scientific:yanjiu">科学研究</Link>
                </Menu.Item>
                <Menu.Item key="scientific:lingyu">
                  <Link to="/news/scientific:lingyu">研究领域</Link>
                </Menu.Item>
                <SubMenu title={<Link to="/newsList/scientific:chengguo:lunwen">科研成果</Link>}>
                  <Menu.Item key="scientific:chengguo:lunwen">
                    <Link to="/newsList/scientific:chengguo:lunwen">论文</Link>
                  </Menu.Item>
                  <Menu.Item key="scientific:chengguo:zhuanli">
                    <Link to="/newsList/scientific:chengguo:zhuanli">专利</Link>
                  </Menu.Item>
                  <Menu.Item key="scientific:chengguo:zhuanzhu">
                    <Link to="/newsList/scientific:chengguo:zhuanzhu">专著</Link>
                  </Menu.Item>
                  <Menu.Item key="scientific:chengguo:huojiang">
                    <Link to="/newsList/scientific:chengguo:huojiang">获奖</Link>
                  </Menu.Item>
                  <Menu.Item key="scientific:chengguo:qita">
                    <Link to="/newsList/scientific:chengguo:qita">其他</Link>
                  </Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu title={<Link to="/news/news:gongzuo">新闻资讯</Link>}>
                  <Menu.Item key="news:gongzuo">
                    <Link to="/news/news:gongzuo">工作动态</Link>
                  </Menu.Item>
                  <Menu.Item key="news:tonggao">
                    <Link to="/news/news:tonggao">通知公告</Link>
                  </Menu.Item>
              </SubMenu>
              <SubMenu title={<Link to="/news/people:shuoshi">人才培养</Link>}>
                  <Menu.Item key="people:shuoshi">
                    <Link to="/news/people:shuoshi">硕士招生</Link>
                  </Menu.Item>
                  <Menu.Item key="people:daoshi">
                    <Link to="/news/people:daoshi">导师介绍</Link>
                  </Menu.Item>
              </SubMenu>
              <SubMenu title={<Link to="/news/compare:jiaoliu">合作交流</Link>}>
                  <Menu.Item key="compare:jiaoliu">
                    <Link to="/news/compare:jiaoliu">合作企业</Link>
                  </Menu.Item>
              </SubMenu>
              <SubMenu title={<Link to="/news/populationOfscience:zhuanzai">科普宣传</Link>}>
                  <Menu.Item key="populationOfscience:zhuanzai">
                    <Link to="/news/populationOfscience:zhuanzai">转载文章</Link>
                  </Menu.Item>
              </SubMenu>
              <SubMenu title={<Link to="/news/file:wenzhang">资料下载</Link>}>
                  <Menu.Item key="file:wenzhang">
                    <Link to="/news/file:wenzhang">文章下载</Link>
                  </Menu.Item>
                  <Menu.Item key="file:lunwen">
                    <Link to="/news/file:lunwen">文章下载</Link>
                  </Menu.Item>
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