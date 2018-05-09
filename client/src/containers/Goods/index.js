import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Modal, Input, Upload, Icon } from 'antd';
import './style.css';

class Goods extends Component {
  static propTypes = {
  }

  state = {
    showModal: false,
    previewVisible: false,
    previewImage: '',
    fileList: [],
  }

  closeImagePreview = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList });

  deleteUser = r => console.log(r)

  renderTableHeader = () => (
    <div className="table-header">
      <h2>货物列表</h2>
      <div>
        <Input.Search
          style={{ width: 300, marginRight: 20 }}
          placeholder="请输入搜索文字"
        />
        <Button
          onClick={() => this.setState({ showModal: true })}  
        >新增货物</Button>
      </div>
    </div>
  );

  renderTable = () => {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '标签',
      dataIndex: 'tag',
    }, {
      title: '图片',
      dataIndex: 'imgs',
    }, {
      title: '定价',
      dataIndex: 'price',
    }, {
      title: '描述',
      dataIndex: 'desc',
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
    const { previewVisible, previewImage, fileList } = this.state;
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
          visible={this.state.showModal}
          onCancel={() => this.setState({ showModal: false })}
          title="新增货物"
          cancelText="取消"
          okText="增加"
        >
          <div className="modal-item">
            <label>名称</label>
            <Input type="text" />
          </div>
          <div className="modal-item">
            <label>价格</label>
            <Input type="text" />
          </div>
          <div className="modal-item">
            <label>图片</label>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              className="image-updater"
              accept="image/*"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </div>
          <div className="modal-item">
            <label>标签</label>
            <Input type="text" />
          </div>
          <div className="modal-item">
            <label>描述</label>
            <Input type="text" />
          </div>
        </Modal>
        <Modal visible={previewVisible} footer={null} onCancel={this.closeImagePreview}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default Goods;
