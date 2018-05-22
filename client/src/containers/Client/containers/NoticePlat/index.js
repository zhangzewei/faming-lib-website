import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import { Link } from 'react-router-dom';


import './style.css';

export default class NewsPlat extends Component {

  genList = ls => ls.map((l, i) => {
    if (i) {
      return (
        <li key={i}>
          <Icon type="info-circle-o" />
          <Link to={l.link} className="list-title"><span className="list-title">{l.title}</span></Link>
          <span className="list-date">{l.date}</span>
        </li>
      );
    }
    return (
      <li key={i} className='news-top'>
        <Icon type="notification"  style={{ fontSize: 23, color: '#d61c23' }}/>
        <Link to={l.link} className="list-title"><span className="list-top-title">{l.title}</span></Link>
        <span className="list-date"></span>
        <span className="news-more">更多>></span>
      </li>
    )
  });
  render() {
    const list = [
      {title: '与湖北劲牌保健酒业有限公司、四川环太实业有限责任公司等多家省内外荞麦生产领域的企业强强联合', date: '2017-8-21',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
      {title: '实验室实行主任负责制，设立实验室主任一人，副主任三人，并下设、二等奖五项，获国家级教学成果二等奖一项、省级教学一、二、三等奖共计六项。选育苦荞麦新品种', date: '2017-12-6',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
      {title: '获得中国驰名商标具备了较强的杂粮产业链发展优势', date: '2017-10-30',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
      {title: '本实验室下设学术委员会、综合办公室、发展战略研究室、人才培训基地和技术研发部，重点围绕杂粮资源开发与利用、杂粮及其副产品加工和功能性成分与保健功效评价等学科开展研究。', date: '2018-1-17',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
      {title: '农业部杂粮加工重点实验室、国家杂粮加工技术研发分中心、成都市荞麦产业化工程技术研究中心根据我国杂粮产业的发展需要', date: '2018-3-2',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
      {title: '获得中国驰名商标具备了较强的杂粮产业链发展优势', date: '2018-5-12',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
      {title: '实验室实行主任负责制，设立实验室主任一人，副主任三人，并下设', date: '2018-5-20',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
    ];
    return (
      <div>
        <div className="notice-table__header">
          <span className="notice-table-title">通知公告</span>
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