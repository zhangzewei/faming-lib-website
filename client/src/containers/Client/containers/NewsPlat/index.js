import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Icon} from 'antd';


import './style.css';

export default class NewsPlat extends Component {

  genList = ls => ls.map((l, i) => {
    if (i) {
      return (
        <li key={i}>
        <Icon type="right-square-o" />
          <span className="list-title">{l.title}</span>
          <span className="list-date">{l.date}</span>
        </li>
      );
    }
    return (
      <li key={i} className='news-top'>
        <Icon type="notification"  style={{ fontSize: 23, color: '#d61c23' }}/>
        <span className="list-top-title">{l.title}</span>
        <span className="list-date"></span>
        <span className="news-more">更多>></span>
      </li>
    )
  });
  render() {
    const list = [
      {title: 'asdasdasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssss', date: '2018-1-12'},
      {title: 'asdasdasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssss', date: '2018-1-12'},
      {title: 'asdasdasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssss', date: '2018-1-12'},
      {title: 'asdasdasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssss', date: '2018-1-12'},
      {title: 'asdasdasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssss', date: '2018-1-12'},
      {title: 'asdasdasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssss', date: '2018-1-12'},
      {title: 'asdasdasdasdasdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssss', date: '2018-1-12'},
    ];
    return (
      <div>
        <div className="news-table__header">
          <span className="table-title">新闻资讯</span>
        </div>
        <div className="news-table__body">
          <ul className="table-list">
            {this.genList(list)}
          </ul>
        </div>
      </div>
    )
  }
}