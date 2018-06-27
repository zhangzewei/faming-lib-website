import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import * as clientAction from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePage from './containers/HomePage';
import SecondPage from './containers/SecondPage';
import {
  renderMenus,
} from './components/Menus';
import NotMatch from '../NotMatch';

import './style.css';

const { Header, Footer, Content } = Layout;

const mapStateToProps = (state) => {
  return {
    state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clientAction, dispatch)
  }
}

class Client extends Component {

  static childContextTypes = {
    actions: PropTypes.object
  }
  
  // 返回Context对象，方法名是约定好的
  getChildContext () {
    return {
      actions: this.props.actions
    }
  }

  componentDidMount() {
    this.props.actions.getMenuConfig();
    this.props.actions.getCarouselPics();
  }

  render() {
    const { menus } = this.props.state.Client.toJS();
    return (
      <Layout>
        <Header className="client-header" style={{ background: '#ecebeb' }} >
        
          <div className='client-headerTitle'>
           <div className='client-headerLogo'></div>
            <ul className='client-headerTitle-ul'>
              <li className='client-headerTitle-list .ch-list1'>农业部杂粮加工重点实验室</li>
              <li className='client-headerTitle-list .ch-list2'>国家杂粮加工技术研发中心</li>
              <li className='client-headerTitle-list .ch-list3'>成都荞麦产业化工程技术研究中心</li>
            </ul>
          </div>

          <div className='rightcon'>
            <li className='rightcon-li1'><Link to="/">首页</Link></li>
            <li className='rightcon-li2'><Link to="/">联系我们</Link></li>
          </div>

          <div className="menu client-container">
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
              {renderMenus(menus.LibMenu, 'LibMenu')}
              {renderMenus(menus.ScientificMenu, 'ScientificMenu')}
              {renderMenus(menus.NewsMenu, 'NewsMenu')}
              {renderMenus(menus.PeopleMenu, 'PeopleMenu')}
              {renderMenus(menus.CompareMenu, 'CompareMenu')}
              {renderMenus(menus.PopulationOfscienceMenu, 'PopulationOfscienceMenu')}
              {renderMenus(menus.FileMenu, 'FileMenu')}
              <Menu.Item key="admin">
                <Link to="/admin/login">内部办公</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>

        <Content className="client-container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/secondPage/:pageType/:menuType"
              render={(r) => <SecondPage state={this.props.state.Client.toJS()} {...r} />}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Client)