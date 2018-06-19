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
      link: '',
      fileName: '',
      currentFiles: []
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getFileList('*');
  }

  deleteFile = id => {
    const { actions } = this.props;
    const { fileList } = this.props.state.toJS();
    actions.deleteFile(id, fileList);
  }

  searchFile = val => {
    const { actions } = this.props;
    const query = val || '*';
    actions.getFileList(query);
  }

  addFile = () => {
    const { link, fileName } = this.state;
    if (link && fileName) {
      this.props.actions.addFile({
        updater: 'admin',
        type: 'out',
        title: fileName,
        path: link
      });
    }
    this.setState({ showFileUploader: false })
  }

  renderTableHeader = () => (
    <div className="table-header">
      <h2>文件列表</h2>
      <Input.Search
        style={{ width: 300 }}
        placeholder="请输入搜索文字"
        onSearch={this.searchFile}
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
    const { currentFiles } = this.state;
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
        render: (record) => (
          <div className="list-action">
            <Button>
              <a href={`http://localhost:4000${record.path}`} download={`下载${record.title}`}>下载</a>
            </Button>
            <Button
              type="danger"
              onClick={() => this.deleteFile(record.id)}
            >删除</Button>
          </div>
        )
      }
    ];
    
    const uploadProps = {
      name: 'file',
      action: '/file/upload',
      headers: {
        authorization: 'authorization-text',
      },
      data: {
        fileName: this.state.fileName
      },
      onChange: (info) => {
        this.setState({currentFiles: info.fileList})
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          this.setState({
            link: info.file.response.link,
            fileName: info.file.name
          })
        }
      },
    }

    return (
      <div className="news-table">
        <Table
          dataSource={fileList}
          columns={col}
          title={() => this.renderTableHeader()}
          rowKey="id"
        />
        <Modal
          visible={this.state.showFileUploader}
          onCancel={() => this.setState({ showFileUploader: false })}
          okText="上传"
          cancelText="取消"
          onOk={this.addFile}
        >
          <Upload
            beforeUpload={file => this.setState({ fileName: file.name })}
            fileList={currentFiles}
            {...uploadProps}
          >
            {
              currentFiles.length >= 1 ? <br /> :
              (
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              )
            }
          </Upload>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)