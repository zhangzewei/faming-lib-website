import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.css'

export default class NewsList extends Component {
  static propTypes = {
    match: PropTypes.object, // 这个是路由提供的参数，可以拿到路由带过来的参数
    list: PropTypes.array,
  }

  static defaultProps = {
    list: [
      {
        key: 'news1',
        newsTitle: '新闻1'
      },
      {
        key: 'news2',
        newsTitle: '新闻2'
      },
      {
        key: 'news3',
        newsTitle: '新闻3'
      },
    ]
  }

  render (){
    const { match: { params: { id } }, list } = this.props;
    const col = [
      {
        title: '标题',
        dataIndex: 'newsTitle',
        key: 'newsTitle'
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

    return (
      <div className="news-table">
        <div className="news-table_action">
          <Button><Link to="/admin/newsEdit">发布文章</Link></Button>
        </div>
        <Table dataSource={list} columns={col} />
      </div>
    );
  }
} 