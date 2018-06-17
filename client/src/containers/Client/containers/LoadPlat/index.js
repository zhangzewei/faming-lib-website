import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Input} from 'antd'
import {Icon} from 'antd'

import './style.css';
import Link from 'react-router-dom/Link';

import Imgdangjian from './img/dangjian.png'

export default class LoadPlat extends Component {

    
    render() {
     
      return (
        <div className='dangjian'>
            <Link to='/'>
            <img src={Imgdangjian}></img>
            </Link>
        </div>
      )
    }
  }