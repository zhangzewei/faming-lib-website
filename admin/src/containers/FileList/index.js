import React, { Component } from 'react';
import { Table, Button, Modal, Upload, Select, Icon, Input} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import * as clientAction from '../actions';
const Option = Select.Option;

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
      publish: '',
      type: '',
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
    const { link, fileName, publish, type } = this.state;
    const { user } = this.props.state.toJS();
    if (link && fileName && type) {
      this.props.actions.addFile({
        updater: user.name,
        type,
        publish: publish || 'forOut',
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
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        render: (text) => (
          <span>{ text === 'lunwen' ? '论文' : '文章' }</span>
        )
      },
      {
        title: '是否对外下载',
        dataIndex: 'publish',
        key: 'publish',
        render: (text) => (
          <span>{ text === 'forIn' ? '对内' : '对外' }</span>
        )
      },
      {
        title: '上传人',
        dataIndex: 'updater',
        key: 'updater',
      },
      {
        title: '上传时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text) => (
          <span>{moment(text).format('l')}</span>
        )
      },
      {
        title: '操作',
        dateIndex: 'action',
        key: 'action',
        width: '200px',
        render: (record) => (
          <div className="list-action">
            <Button>
              <a 
                href={`http://localhost:4000${record.path}`} 
                download={`下载${record.title}`}
                target="_blank"
              >下载</a>
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
          onCancel={
            () => this.setState({
              showFileUploader: false,
              currentFiles: [],
              link: '',
              fileName: '',
              publish: '',
              type: '',
            })
          }
          okText="上传"
          cancelText="取消"
          onOk={this.addFile}
        >
          <div className="file-modal_item">
            <Upload
              beforeUpload={file => this.setState({ fileName: file.name })}
              fileList={currentFiles}
              {...uploadProps}
            >
              {
                currentFiles.length >= 1 ? <br /> :
                (
                  <Button>
                    <Icon type="upload" /> 选择文件
                  </Button>
                )
              }
            </Upload>
          </div>
          <div className="file-modal_item">
            <label>文件类型</label>
            <Select
              allowClear
              style={{ width: '100%' }}
              onSelect={key => this.setState({ type: key })}
              value={this.state.type}
            >
              <Option key="article">文章</Option>
              <Option key="lunwen">论文</Option>
            </Select>
          </div>
          <div className="file-modal_item">
            <label>是否对外下载</label>
            <Select
              allowClear
              style={{ width: '100%' }}
              onSelect={key => this.setState({ publish: key })}
              value={this.state.publish}
            >
              <Option key="forOut">对外下载</Option>
              <Option key="forIn">对内下载</Option>
            </Select>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)