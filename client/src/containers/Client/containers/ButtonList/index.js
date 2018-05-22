import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';


import './style.css';

export default class ButtonList extends Component {

    render() {
     
      return (
       <div className='buttonList'>
           <ul className='buttonList-ul'>
            <Link to='/secondPage/news/LibMenu:shiyanshi/shiyanshi'><li className='buttonList-item'>实验室概况</li></Link>
            <Link to='/secondPage/news/ScientificMenu:yanjiu/yanjiu'><li className='buttonList-item'>科研平台</li></Link>
            <Link to='/secondPage/news/PeopleMenu:shuoshi/shuoshi'><li className='buttonList-item'>人才培养</li></Link>
            <Link to='/secondPage/news/CompareMenu:jiaoliu/jiaoliu'><li className='buttonList-item'>合作交流</li></Link>
           </ul>
       </div>
      )
    }
  }