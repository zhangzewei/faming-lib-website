import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

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

  constructor() {
    super();
    this.state = {
      showFileUploader: false,
    }
  }

  render (){
    const { list } = this.props;
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
          <div className="list-action">
            <Button>下载</Button>
            <Button type="danger">删除</Button>
          </div>
        )
      }
    ];

    return (
      <div className="news-table">
        <div className="news-table_action">
          <Button
            onClick={() => this.setState({
              showFileUploader: true,
            })}
          >上传文件</Button>
        </div>
        <Table dataSource={list} columns={col} />
        <Modal
          visible={this.state.showFileUploader}
          onCancel={() => this.setState({ showFileUploader: false })}
          okText="上传"
          cancelText="取消"
        >
          上传文件
        </Modal>
      </div>
    );
  }
} 