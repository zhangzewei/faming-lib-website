import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './style.css'

export default class NewsList extends Component {
  static propTypes = {
    match: PropTypes.object, // 这个是路由提供的参数，可以拿到路由带过来的参数
    list: PropTypes.array,
  }

  static defaultProps = {
    list: [
      {
        newsTitle: '新闻1'
      },
      {
        newsTitle: '新闻2'
      },
      {
        newsTitle: '新闻3'
      },
    ]
  }

  render (){
    const { match: { params: { type } }, list } = this.props;
    const col = [
      {
        title: '标题',
        dataIndex: 'newsTitle',
        key: 'newsTitle'
      }
    ];
    return (
      <div className="news-table">
        <Table dataSource={list} columns={col} />
      </div>
    );
  }
} 