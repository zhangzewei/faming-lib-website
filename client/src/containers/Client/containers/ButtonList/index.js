import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';


import './style.css';

export default class ButtonList extends Component {

    render() {
     
      return (
       <div className='buttonList'>
           <ul className='buttonList-ul'>
               <li className='buttonList-item'><Link to='/'>实验室概况</Link></li>
               <li className='buttonList-item'><Link to='/'>科研平台</Link></li>
               <li className='buttonList-item'><Link to='/'>人才培养</Link></li>
               <li className='buttonList-item'><Link to='/'>合作交流</Link></li>
           </ul>
       </div>
      )
    }
  }