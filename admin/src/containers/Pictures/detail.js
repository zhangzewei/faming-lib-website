import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Select, Upload, Modal, Icon, Button } from 'antd';
import * as clientAction from '../actions';

import './style.css';
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

// TODO: 接入数据的时候需要展示的数据用props的数据，初始的state的数据和
// props的一致，等到修改的时候再去变动，然后上穿
class PicsDetails extends Component {
  constructor() {
    super();
    this.state = {
      articleTitle: '',
      articleLinkId: '',
      previewVisible: false,
      previewImage: '',
      fileList: [],
      fileName: '',
    }
  }

  componentDidMount() {
    this.props.actions.getNewsList('*')
  }
  
  onSelect = (value, opt) => {
    this.setState({
      articleLinkId: value,
      articleTitle: opt.props.children,
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

  updateImage = () => {
    const { articleLinkId, articleTitle, fileList } = this.state;
    if (articleLinkId && articleTitle && fileList.length) {
      this.props.actions.addPics({
        articleLinkId,
        articleTitle,
        img: fileList[0].thumbUrl
      })
    } else {
      clientAction.openNotificationWithIcon('error', '轮播图', '轮播图文章或者轮播图不能为空');
    }
  }

  renderSelects = () => {
    const { newsList } = this.props.state.toJS();
    return newsList.map(list => (
      <Option
        value={list.id}
        key={list.id}
      >{list.title}</Option>
    ));
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
      <div className="user-detail__container">
        <h2>轮播图信息</h2>
        <div className="user-details">
          <div className="user-details_item">
            <label>图片对应新闻</label>
            <Select
              allowClear
              onSelect={this.onSelect}
            >{this.renderSelects()}</Select>
          </div>
          <div className="user-details_item">
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
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        </div>
        <Button
          disabled={this.props.state.toJS().pics.length >= 5}
          onClick={this.updateImage}
        >
          上传轮播图
        </Button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PicsDetails)