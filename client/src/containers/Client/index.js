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
          <div className='client-headerTitle'>
           <div className='client-headerLogo'></div>
            <ul className='client-headerTitle-ul'>
              <li className='client-headerTitle-list'>农业部杂粮加工重点实验室</li>
              <li className='client-headerTitle-list'>国家杂粮加工技术研发中心</li>
              <li className='client-headerTitle-list'>成都荞麦产业化工程技术研究中心</li>
            </ul>
          </div>
          <div className="menu">
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
        <Footer className="client-footer">
          <div className='footerLink'>
            <ul>
              <li className='footerLink-list'><a href="http://www.cdu.edu.cn/">成都大学官网</a></li>
              <li className='footerLink-list'><a href="http://jw.cdu.edu.cn//">成都大学教务处</a></li>
              <li className='footerLink-list'><a href="http://bio.cdu.edu.cn/">药学与生物工程学院</a></li>
              <li className='footerLink-list'><a href="http://lib.cdu.edu.cn/">成都大学图书馆</a></li>
              <li className='footerLink-list'><a href="http://scmplab.cdu.edu.cn/">肉类加工实验室</a></li>
              <li className='footerLink-list'><a href="http://202.115.80.207/virexp/">食品与生物工程</a></li>
            </ul>

          </div>
          <div className='footerName'>
            <li className='footerName-logo'></li>
            <li className='footerName-li'>
              <p className='footerName-liChinese'>农业部杂粮加工重点实验室</p>
              <p className='footerName-liEinglish'>Key Laboratory of Coarse Cereal Processing Ministry of Agricultur</p>
            </li>
            <li className='footerName-li'>
              <p className='footerName-liChinese'>国家杂粮加工技术研发中心</p>
              <p className='footerName-liEinglish'>National R&D Center For Coarse Cereal Processing</p>
            </li>
            <li className='footerName-li'>
              <p className='footerName-liChinese'>成都荞麦产业化工程技术研究中心</p>
              <p className='footerName-liEinglish'>Chengdu Engineering Research Center for Buckwheat Industrialization</p>
            </li>
          </div>
          <div className='footerInform'>
            <ul className='footerInform-ul'>
              <li className='footerInform-li'>建设单位：成都大学　农业部杂粮加工重点实验室</li>
              <li className='footerInform-li'>地址(Adr)：四川省成都市外东十陵镇成都大学第9教学楼</li>
              <li className='footerInform-li'>电话(Tel)：028-84616063</li>
            </ul>
          </div>
        </Footer>
      </Layout>
    )
  }
}