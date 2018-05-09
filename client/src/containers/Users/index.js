import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Input } from 'antd';

class Users extends Component {
  static propTypes = {
  }

  deleteUser = r => console.log(r);

  renderTableHeader = () => (
    <div className="table-header">
      <h2>用户列表</h2>
      <Input.Search
        style={{ width: 300 }}
        placeholder="请输入搜索文字"
      />
    </div>
  );

  renderTable = () => {
    const columns = [{
      title: '用户名',
      dataIndex: 'userName',
    }, {
      title: '密码',
      dataIndex: 'passWord',
    }, {
      title: '操作',
      render: (_, record) => (
        <Button onClick={() => this.deleteUser(record)}>删除</Button>
      )
    }];
    let data = [];
    return (
      <Table
        columns={columns}
        data={data}
        title={() => this.renderTableHeader()}
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

export default Users;
