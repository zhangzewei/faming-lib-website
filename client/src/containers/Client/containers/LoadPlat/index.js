import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Input} from 'antd'
import {Icon} from 'antd'

import './style.css';

export default class LoadPlat extends Component {

    
    render() {
     
      return (
        <div className='loadPlatBox'>
            <span className='line'></span>
            <div className='loadPlat'>
                <div className='loadPlat-header'>
                        <li className='header-name'>农业部杂粮加工实验室</li>
                        <li className='header-title'>----管理系统----</li>
                </div>
                <form action="" className='loadForm'>
                    <div className='userName formList'>
                        <label htmlFor="">用户名：</label>
                        <div className='inputList'> 
                            <Icon type="user" style={{fontSize:26}}/>
                            <Input type="text" className='formList-input' placeholder="Basic usage"/>
                        </div>
                    </div>

                    <div className='userPassword formList'>
                        <label htmlFor="">密  码：</label>
                        <div className='inputList'> 
                            <Icon type="lock" style={{fontSize:26}}/>
                            <Input type="text" className='formList-input' placeholder="Basic usage"/>
                        </div>
                    </div>

                    <div className='loadButton'>登   录</div>
                   
                </form>
            </div>
        </div>
      )
    }
  }