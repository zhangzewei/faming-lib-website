import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';

export default class FileList extends Component {
  static propTypes = {
    list: PropTypes.array,
  }

  static defaultProps = {
    list: [
      {
        key: '1',
        fileTitle: '文件1',
      },
      {
        key: '2',
        fileTitle: '文件2',
      }
    ]
  }

  render (){
    const { list } = this.props;
    console.log(this.props.list)
    const col = [
      {
        title: '标题',
        dataIndex: 'fileTitle',
        key: 'fileTitle',
      },
      {
        title: '操作',
        dateIndex: 'action',
        key: 'action',
        width: '200px',
        render: () => (
          <Button>下载</Button>
        )
      }
    ];

    return (
      <div className="news-table">
        <Table dataSource={list} columns={col} />
      </div>
    );
  }
} 