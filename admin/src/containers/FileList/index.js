import React, { Component } from 'react';
import { Table, Button, Modal, Upload, message, Icon, Input} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

class FileList extends Component {
  constructor() {
    super();
    this.state = {
      showFileUploader: false,
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getFileList('*');
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
    const { fileList } = this.props.state.toJS();
    const col = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
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
          dataSource={fileList}
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

export default connect(mapStateToProps, mapDispatchToProps)(FileList)