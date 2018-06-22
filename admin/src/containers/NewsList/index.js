import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as clientAction from '../actions';
import './style.css'


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

class NewsList extends Component {
  static propTypes = {
    match: PropTypes.object, // 这个是路由提供的参数，可以拿到路由带过来的参数
    list: PropTypes.array,
  }

  static contextTypes = {
    actions: PropTypes.object
  };

  static defaultProps = {
    list: [
      {
        key: 'news1',
        title: '新闻1'
      },
      {
        key: 'news2',
        title: '新闻2'
      },
      {
        key: 'news3',
        title: '新闻3'
      },
    ]
  }

  componentDidMount() {
    this.props.actions.getNewsList('*')
  }

  searchNewsByTitle = title => {
    const query = title || '*';
    this.props.actions.getNewsList(query)
  }

  deleteNews = record => {
    const { newsList } = this.props.state.toJS();
    this.props.actions.deleteNews(record.id, newsList);
  }

  renderTableHeader = () => (
    <div className="table-header">
      <h2>新闻列表</h2>
      <Input.Search
        style={{ width: 300 }}
        placeholder="请输入搜索文字"
        onSearch={this.searchNewsByTitle}
      />
      <Button
        style={{ float: 'right' }}
      ><Link to="/admin/newsEdit/createNews">发布文章</Link></Button>
    </div>
  );

  render (){
    const { newsList } = this.props.state.toJS();
    const col = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '发布时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text) => (
          <span>{moment(text).format('l')}</span>
        )
      },
      {
        title: '发布人',
        dataIndex: 'creator',
        key: 'creator',
      },
      {
        title: '操作',
        dateIndex: 'action',
        key: 'action',
        width: '200px',
        render: (record) => (
          <div className="list-action">
            <Button><Link to={`/admin/newsEdit/${record.id}`}>编辑</Link></Button>
            <Button
              type="danger"
              onClick={() => this.deleteNews(record)}
            >删除</Button>
          </div>
        )
      }
    ];

    return (
      <div className="news-table">
        <Table
          dataSource={newsList}
          columns={col}
          title={() => this.renderTableHeader()}
          rowKey="id"
        />
      </div>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)