import React, { Component } from 'react';
import { Table, Button, Modal, Upload, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';
import * as clientAction from '../actions';

import './style.css';

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

class Pictures extends Component {

  state = {
    visible: false,
    previewVisible: false,
    previewImage: '',
    fileList: [],
    fileName: '',
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getCarousel('*');
  }

  deletePic = id => {
    const { actions } = this.props;
    const { carousel } = this.props.state.toJS();
    actions.deleteCarousel(id);
  }

  addCarsouel = () => {
    const { fileList } = this.state;
    this.props.actions.addCarsouel(_get(fileList, [0, 'thumbUrl'], ''));
    this.setState({
      visible: false,
      fileList: []
    })
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
  }

  handleCancel = () => this.setState({ previewVisible: false });

  renderTableHeader = () => (
    <div className="table-header">
      <h2>轮播图列表</h2>
      <Button
        disabled={this.props.state.toJS().carousel.length >= 16}
        onClick={() => this.setState({ visible: true })}
      >新增轮播图</Button>
    </div>
  );

  renderTable = () => {
    const { carousel } = this.props.state.toJS();
    const columns = [{
      title: '图片',
      dataIndex: 'img',
      render: (text) => (
        <img className="news-pic" src={text} alt={text} />
      )
    }, {
      title: '操作',
      render: (record) => (
        <div className="list-action">
          <Button
            type="danger"
            onClick={() => this.deletePic(record.id)}
          >删除</Button>
        </div>
      )
    }];
    return (
      <Table
        columns={columns}
        dataSource={carousel}
        title={() => this.renderTableHeader()}
        rowKey="id"
      />
    )
  }

  render() {
    const { visible, previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        {this.renderTable()}
        <Modal
          visible={visible}
          onCancel={() => this.setState({
            visible: false,
            fileList: []
          })}
          okText="确定"
          cancelText="取消"
          onOk={this.addCarsouel}
        >
          <div style={{ height: '200px' }}>
            <Upload
              action='/file/upload'
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              beforeUpload={file => this.setState({ fileName: file.name })}
              data={{fileName: this.state.fileName}}
              disabled={fileList.length >= 1}
              accept={'image/*'}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </div>
        </Modal>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)
