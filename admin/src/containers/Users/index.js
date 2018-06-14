import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAction from '../actions';

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

class Users extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getUsers('*');
  }

  searchUsers = name => {
    const { actions } = this.props;
    const query = name || '*';
    actions.getUsers(query);
  }

  deleteUser = id => {
    const { actions } = this.props;
    const { users } = this.props.state.toJS();
    actions.deleteUser(id, users);
  }

  renderTableHeader = () => (
    <div className="table-header">
      <h2>用户列表</h2>
      <Input.Search
        style={{ width: 300 }}
        placeholder="请输入搜索文字"
        onSearch={this.searchUsers}
      />
      <Button style={{ float: 'right' }}><Link to="/admin/userEdit">新增用户</Link></Button>
    </div>
  );

  renderTable = () => {
    const { users } = this.props.state.toJS();
    const columns = [{
      title: '用户名',
      dataIndex: 'name',
    }, {
      title: '操作',
      render: (record) => (
        <div className="list-action">
          <Button>编辑</Button>
          <Button
            type="danger"
            onClick={() => this.deleteUser(record.id)}
          >删除</Button>
        </div>
      )
    }];
    return (
      <Table
        columns={columns}
        dataSource={users}
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
