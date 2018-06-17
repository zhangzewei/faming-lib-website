import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Icon} from 'antd';


import './style.css';

import Img1 from './img/kepu1.png'
import Img2 from './img/kepu2.png'
import Img3 from './img/kepu1.png'
import Img4 from './img/kepu1.png'

export default class ImgSlid extends Component {

   // 轮播js
   Lunbo = (n)=>{
    for (let i = 0; i < n.length; i++) {
      const element = n[i];
      if (i=n.length) {
        element.imgUrl=n[0];
        alert('轮播函数'+i);
      
      } else {
        element.imgUrl=n[i+1];
        alert('轮播函数'+i);
      }
      
    }
  }

    genList = ls => ls.map((l, i) => {
        if (i<4) {
            return (
              <li className='ImgSlid-li' key={i}>
                <img src={l.imgUrl}/>
              </li> 
            );
          }
    });


    render() {
     const imgList = [
        {imgUrl:Img1,content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:Img2,content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:Img3,content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:Img4,content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},                  
     ]
        
      return (
       <div className='imgSlid'>
          <div className='slide-left slideButton'>
           <Icon type="notification"  style={{ fontSize: 23, color: '#d61c23' }}/>
          </div>
          <div className='imgListBox'>
            {this.genList(imgList)}
          </div>  
          <div className='slide-right slideButton'>
           <Icon type="notification"  style={{ fontSize: 23, color: '#d61c23' }}/>
          </div>
        </div>

      )
    }
  }