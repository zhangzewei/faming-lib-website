import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Menu } from 'antd';
import { Switch, Route } from 'react-router-dom';
import * as Menus from '../../components/Menus';
import './style.css';
import NewsPage from '../NewsPage';
import NewsList from '../NewsList';
import FileList from '../FileList';

const menuTypeMap = { // 用来对应的页面的标题
  gaikuang: '实验室概况',
  lingdao: '领导',
  tuandui: '团队介绍',
  jigou: '机构设置',
  jichujianshe: '基地建设',
  yanjiu: '科学研究',
  lingyu: '研究领域',
  chengguolunwen: '论文',
  chengguozhuanli: '专利',
  chengguozhuanzhu: '专著',
  chengguohuojiang: '获奖',
  chengguoqita: '其他',
  gongzuo: '工作动态',
  tonggao: '通知公告',
  shuoshi: '硕士招生',
  daoshi: '导师介绍',
  jiaoliu: '合作企业',
  zhuanzai: '转载文章',
  wenzhang: '文章下载',
  lunwenxiazai: '论文下载',
}

const menuTitle = {
  LibMenu: '实验室概况',
  ScientificMenu: '科研平台',
  NewsMenu: '新闻资讯',
  PeopleMenu: '人才培养',
  CompareMenu: '合作交流',
  PopulationOfscienceMenu: '科普宣传',
  FileMenu: '资料下载',
}

export default class SecondPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
  }
  
  render() {
    const { state, match: { params: { pageType, menuType, id } } } = this.props;
    const menuTp = menuType.split(':')[0];
    const menuName = menuType.split(':')[1];
    const { currentNews } = state.Client.toJS();

    return (
      <div className="second-page">
        <Row>
          <Col span={5}>
            <div className='menuTitle'>
              {menuTitle[menuTp]}
            </div>

            <div className='menuUl'>
              <Menu mode="inline"selectedKeys={[`${menuType}`]}>
                {Menus[menuTp]()}
              </Menu>
            </div>
          
          </Col>
          <Col span={19}>
            <div className="airticle">
              <div className="airticle-header">
                <span>{menuTypeMap[menuName]}</span>
              </div>
              <div className="airticle-body">
                <Switch>
                  <Route
                    path={`/secondPage/news/${menuType}/:id`}
                    render={(r) => <NewsPage currentNews={currentNews} {...r} />}
                  />
                  <Route path={`/secondPage/newsList/${menuType}/:id`} component={NewsList} />
                  <Route path={`/secondPage/fileList/${menuType}/:id`} component={FileList} />
                </Switch>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}