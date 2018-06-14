import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAction from '../actions';

import './style.css';

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

class Pictures extends Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.getPics('*');
  }

  deletePic = id => {
    const { actions } = this.props;
    const { pics } = this.props.state.toJS();
    actions.deletePic(id, pics);
  }

  renderTableHeader = () => (
    <div className="table-header">
      <h2>轮播图列表</h2>
      <Button
        disabled={this.props.state.toJS().pics.lengtn >= 5}
      ><Link to="/admin/picEdit">新增轮播图</Link></Button>
    </div>
  );

  renderTable = () => {
    const { pics } = this.props.state.toJS();
    const columns = [{
      title: '图片',
      dataIndex: 'img',
      render: (text) => (
        <img className="news-pic" src={text} alt={text} />
      )
    }, {
      title: '新闻标题',
      dataIndex: 'articleTitle',
    }, {
      title: '操作',
      render: (record) => (
        <div className="list-action">
          <Button>编辑</Button>
          <Button
            type="danger"
            onClick={() => this.deletePic(record.id)}
          >删除</Button>
        </div>
      )
    }];
    return (
      <Table
        columns={columns}
        dataSource={pics}
        title={() => this.renderTableHeader()}
        rowKey="id"
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)
