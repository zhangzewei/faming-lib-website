import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal, Upload, message, Icon, Input} from 'antd';
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

  renderTableHeader = () => (
    <div className="table-header">
      <h2>文件列表</h2>
      <Input.Search
        style={{ width: 300 }}
        placeholder="请输入搜索文字"
      />
      <Button
        style={{ float: 'right' }}
        onClick={() => this.setState({
          showFileUploader: true,
        })}
      >上传文件</Button>
    </div>
  );

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
    
    const uploadProps = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }

    return (
      <div className="news-table">
        <Table
          dataSource={list}
          columns={col}
          title={() => this.renderTableHeader()}
        />
        <Modal
          visible={this.state.showFileUploader}
          onCancel={() => this.setState({ showFileUploader: false })}
          okText="上传"
          cancelText="取消"
        >
          <Upload {...uploadProps}>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>
        </Modal>
      </div>
    );
  }
} 