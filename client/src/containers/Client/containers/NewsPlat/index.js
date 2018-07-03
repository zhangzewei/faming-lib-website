import React, { Component } from 'react';
import {Icon} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



import './style.css';

export default class NewsPlat extends Component {
  static propTypes = {
    list: PropTypes.array,
  }

  static defaultProps = {
    list: []
  }

  genList = ls => ls.map((l, i) => {
    if (i) {
      return (
        <li key={i}>
        <Icon type="right-square-o" />
          <Link to={`/secondPage/news/NewsMenu:${l.id}`} className="list-title">
            <span className="list-title">{l.title}</span>
          </Link>
          <span className="list-date">{l.date}</span>
        </li>
      );
    }
    return (
      <li key={i} className='news-top'>
        <Icon type="notification"  style={{ fontSize: 23, color: '#d61c23' }}/>
        <Link to={`/secondPage/news/NewsMenu:${l.id}`} className="list-title">
          <span className="list-top-title">{l.title}</span>
        </Link>
        <span className="list-date"></span>
        <Link to="/secondPage/newsList/NewsMenu:gongzuo">
          <span className="news-more">更多>></span>
        </Link>
      </li>
    )
  });
  render() {
    const { list } = this.props;
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