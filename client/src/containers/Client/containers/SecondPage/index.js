import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Menu } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { renderMenuWithoutSubMenu } from '../../components/Menus';
import './style.css';
import NewsPage from '../NewsPage';
import NewsList from '../NewsList';
import FileList from '../FileList';

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
    const { state: { menus }, match: { params: { menuType } } } = this.props;
    const menuTy = menuType.split(':')[0];
    return (
      <div className="second-page">
        <Row>
          <Col span={5}>
            <div className='menuTitle'>
              {menuTitle[menuTy]}
            </div>

            <div className='menuUl'>
              <Menu
                mode="inline"
              >
                {renderMenuWithoutSubMenu(menus[menuTy])}
              </Menu>
            </div>
          
          </Col>
          <Col span={19}>
            <div className="airticle">
              <div className="airticle-header">
                <span></span>
              </div>
              <div className="airticle-body">
                <Switch>
                  <Route
                    path={`/secondPage/news/:id`}
                    component={NewsPage}
                  />
                  <Route path={`/secondPage/newsList/:type`} component={NewsList} />
                  <Route path={`/secondPage/fileList/:type`} component={FileList} />
                </Switch>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}