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
      <Button style={{ float: 'right' }}><Link to="/admin/userEdit">新增用户</Link></Button>
    </div>
  );

  renderTable = () => {
    const columns = [{
      title: '用户名',
      dataIndex: 'userName',
    }, {
      title: '操作',
      render: (_, record) => (
        <div className="list-action">
          <Button>编辑</Button>
          <Button type="danger" onClick={() => this.deleteUser(record)}>删除</Button>
        </div>
      )
    }];
    let data = [
      {
        key: 'u1',
        userName: 'hahah'
      }
    ];
    return (
      <Table
        columns={columns}
        dataSource={data}
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

export default Users;
