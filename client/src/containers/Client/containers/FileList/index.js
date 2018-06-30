import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAction from '../../actions';

const mapStateToProps = ({Client}) => {
  return {
    state: Client
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clientAction, dispatch)
  }
}

class FileList extends Component {
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

  componentDidMount() {
    const { actions, match: { params: { type } } } = this.props;
    const fileListType = type.split(':')[1];
    this.listType = fileListType;
    actions.getFileList(fileListType);
  }

  // 切换路由参数的时候进行数据更新
  componentWillReceiveProps(nextProps) {
    const { match: { params: { type } } } = nextProps;
    const fileListType = type.split(':')[1];
    if (this.listType !== type) {
      this.listType = fileListType;
      this.props.actions.getFileList(fileListType);
    }
  }

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
        render: (_, record) => (
          <Button>
            <a 
              href={`http://localhost:4000${record.path}`} 
              download={`下载${record.title}`}
              target="_blank"
            >下载</a>
          </Button>
        )
      }
    ];

    return (
      <div className="news-table">
        <Table
          dataSource={fileList}
          columns={col}
          rowKey="id"
        />
      </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FileList);