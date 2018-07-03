import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as clientAction from '../../actions';
import './style.css';

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

class NewsList extends Component {
  static propTypes = {
    match: PropTypes.object, // 这个是路由提供的参数，可以拿到路由带过来的参数
  }

  componentDidMount() {
    const { match: { params: { type } } } = this.props;
    const currentType = type.split(':')[1];
    this.type = currentType;
    this.props.actions.getNewsList(currentType);
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: { type } } } = nextProps;
    const currentType = type.split(':')[1];
    if (currentType !== this.type) {
      this.type = currentType;
      this.props.actions.getNewsList(currentType);
    }
  }

  render (){
    const { match: { params: { type } } } = this.props;
    const { newsList } = this.props.state.toJS();
    const typePlaceholder = type.split(':')[0];
    const col = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        render: (_, record) => {
          return (
            <Link to={`/secondPage/news/${typePlaceholder}:${record.id}`}>
            {record.title}
          </Link>
          )
        }
      },
      {
        title: '发布时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text) => (
          <span>{moment(text).format('l')}</span>
        )
      },
    ];
    return (
      <div className="news-table">
        <Table
          dataSource={newsList}
          columns={col}
          rowKey="id"
        />
      </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)