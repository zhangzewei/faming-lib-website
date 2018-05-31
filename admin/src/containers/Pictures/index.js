import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Input } from 'antd';

import './style.css';

class Pictures extends Component {
  static propTypes = {
    pics: PropTypes.array,
  }

  static defaultProps = {
    pics: []
  }

  deleteUser = r => console.log(r);

  renderTableHeader = () => (
    <div className="table-header">
      <h2>轮播图列表</h2>
      <Button
        disabled={this.props.pics.lengtn >= 5}
      ><Link to="/admin/picEdit">新增轮播图</Link></Button>
    </div>
  );

  renderTable = () => {
    const columns = [{
      title: '图片',
      dataIndex: 'pic',
      render: (text) => (
        <img className="news-pic" src={text} alt={text} />
      )
    }, {
      title: '新闻标题',
      dataIndex: 'newsTitle',
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
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528355327&di=61681caa7552f647b58a04d18d9cfe60&imgtype=jpg&er=1&src=http%3A%2F%2Fmvimg1.meitudata.com%2F5665a21fefb4b7202.jpg',
        newsTitle: '可爱的猫'
      }
    ];
    return (
      <Table
        columns={columns}
        dataSource={data}
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

export default Pictures;
