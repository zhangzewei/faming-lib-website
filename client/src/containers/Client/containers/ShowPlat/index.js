import React, { Component } from 'react'
import PropTypes from 'prop-types';


import './style.css';

export default class ShowPlat extends Component {
    genShowList = ls => ls.map((item, index) => {
        if (index<3) {
          return (
            <li key={index} className="list-show">
              <img src={item.imgUrl} alt="暂时没有图片" className="list-showConentImg"/>
              <span className="list-showConent">{item.showConent}</span>
              <span className="news-more">更多>></span>
            </li>
          );
        }
        
      });
    
    render() {
        const list = [
           {imgUrl:'http://img.xinmin.cn/xmwb/2017/9/NEM1_20170920_C0322022662_A742789.jpg',showConent:'成都大学特色杂粮研究团队一直致力于特色杂粮的研究工作，主要围绕苦荞、藜麦、燕麦等特色杂粮的新品种选育、优质高产栽培、产品开发及精深加工与综合利用，以及药用功效评价等方面开展研究。'},
           {imgUrl:'http://img.xinmin.cn/xmwb/2017/9/NEM1_20170920_C0322022662_A742789.jpg',showConent:'成都大学特色杂粮研究团队一直致力于特色杂粮的研究工作，主要围绕苦荞、藜麦、燕麦等特色杂粮的新品种选育、优质高产栽培、产品开发及精深加工与综合利用，以及药用功效评价等方面开展研究。'},
           {imgUrl:'http://img.xinmin.cn/xmwb/2017/9/NEM1_20170920_C0322022662_A742789.jpg',showConent:'成都大学特色杂粮研究团队一直致力于特色杂粮的研究工作，主要围绕苦荞、藜麦、燕麦等特色杂粮的新品种选育、优质高产栽培、产品开发及精深加工与综合利用，以及药用功效评价等方面开展研究。'},
           {imgUrl:'http://img.xinmin.cn/xmwb/2017/9/NEM1_20170920_C0322022662_A742789.jpg',showConent:'成都大学特色杂粮研究团队一直致力于特色杂粮的研究工作，主要围绕苦荞、藜麦、燕麦等特色杂粮的新品种选育、优质高产栽培、产品开发及精深加工与综合利用，以及药用功效评价等方面开展研究。'},
           {imgUrl:'http://img.xinmin.cn/xmwb/2017/9/NEM1_20170920_C0322022662_A742789.jpg',showConent:'成都大学特色杂粮研究团队一直致力于特色杂粮的研究工作，主要围绕苦荞、藜麦、燕麦等特色杂粮的新品种选育、优质高产栽培、产品开发及精深加工与综合利用，以及药用功效评价等方面开展研究。'}
            
          ];


      return (
        <div className='showPlat'>
            <ul className='showPlat-ul'>
                {this.genShowList(list)}
            </ul>
        </div>
      )
    }
  }