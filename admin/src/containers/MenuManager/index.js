import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs, Modal, Button, Table, Input, Select } from 'antd';
import _get from 'lodash/get';
import * as clientAction from '../actions';

import './style.css';
const Option = Select.Option;

const TabPane = Tabs.TabPane;
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

class MenuManager extends Component {

  state = {
    showModal: false,
    currentTab: 'LibMenu',
    articleLinkId: '',
    articleTitle: '',
    menuName: ''
  }

  componentDidMount() {
    this.props.actions.getMenus();
    this.props.actions.getNewsListByType('forMenu');
  }

  changeTab = key => {
    this.setState({ currentTab: key })
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  onSelect = (value, opt) => {
    this.setState({
      articleLinkId: value,
      articleTitle: opt.props.children,
    })
  }

  onModalOk = () => {
    const { menus } = this.props.state.toJS();
    const { currentTab, articleLinkId, articleTitle, menuName } = this.state;
    this.props.actions.updateMenus(
      menus,
      {
        currentTab,
        articleLinkId,
        articleTitle,
        menuName
      }
    );
    this.setState({
      showModal: false,
      articleLinkId: '',
      articleTitle: '',
      menuName: ''
    });
  }

  deleteMenu = articleLinkId => {
    const { menus } = this.props.state.toJS();
    const { currentTab } = this.state;
    this.props.actions.deleteMenus(menus, { articleLinkId, currentTab });
  }

  renderSelects = () => {
    const { newsList } = this.props.state.toJS();
    return newsList.map(list => (
      <Option
        value={list.id}
        key={list.id}
      >{list.title}</Option>
    ));
  }

  renderTable = menu => { 
    const { menus } = this.props.state.toJS();   
    const columns = [{
      title: '菜单名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '对应新闻',
      dataIndex: 'articleTitle',
      key: 'articleTitle',
    }, {
      title: '操作',
      dateIndex: 'action',
      key: 'action',
      render: (record) => (
        <Button
          type="danger"
          onClick={() => this.deleteMenu(record.articleLinkId)}
        >删除</Button>
      )
    }];
    return (
      <Table dataSource={_get(menus, ['menus', menu], [])} columns={columns} />
    )
  }

  renderTabs = () => {
    const operations = <Button onClick={this.openModal}>添加菜单</Button>;
    return (
      <Tabs
        defaultActiveKey="LibMenu"
        onChange={this.changeTab}
        tabBarExtraContent={operations}
      >
        <TabPane
          tab="实验室概况" 
          key="LibMenu"
        >
          {this.renderTable('LibMenu')}
        </TabPane>
        <TabPane
          tab="人才培训"
          key="PeopleMenu"
        >
          {this.renderTable('PeopleMenu')}
        </TabPane>
        <TabPane
          tab="科研平台"
          key="ScientificMenu"
        >
          {this.renderTable('ScientificMenu')}
        </TabPane>
        <TabPane
          tab="合作企业" 
          key="CompareMenu"
        >
          {this.renderTable('CompareMenu')}
        </TabPane>
      </Tabs>
    );
  }
  render() {
    return (
      <span>
        {this.renderTabs()}
        <Modal
          visible={this.state.showModal}
          onCancel={
            () => this.setState({
              showModal: false,
              articleLinkId: '',
              articleTitle: '',
              menuName: ''
            })
          }
          onOk={this.onModalOk}
          okText="确认"
          cancelText="取消"
        >
          <div className="menus-manager_modal">
            <div className="modal-item">
              <label>菜单名字</label>
              <Input
                name="menusName"
                value={this.state.menuName}
                onChange={val => this.setState({ menuName: val.target.value })}
              />
            </div>
            <div className="modal-item">
              <label>选择对应的新闻</label>
              <Select
                allowClear
                style={{ width: '100%' }}
                onSelect={this.onSelect}
                value={this.state.articleLinkId}
              >{this.renderSelects()}</Select>
            </div>
          </div>
        </Modal>
      </span>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuManager);