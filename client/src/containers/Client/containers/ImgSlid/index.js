import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './style.css';

export default class ImgSlid extends Component {

    genList = ls => ls.map((l, i) => {
        if (i<4) {
            return (
              /* <li key={i}>
              <Icon type="right-square-o" />
                <span className="list-title">{l.title}</span>
                <span className="list-date">{l.date}</span>
              </li> */
              <li className='ImgSlid-li' key={i} style={{backgroundImage:"url({l.imgUrl})"}}>
                <a href="">{l.content}</a>
              </li> 
            );
          }
    });


    render() {
     const imgList = [
        {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729643581,2045679483&fm=27&gp=0.jpg',content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729643581,2045679483&fm=27&gp=0.jpg',content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729643581,2045679483&fm=27&gp=0.jpg',content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729643581,2045679483&fm=27&gp=0.jpg',content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729643581,2045679483&fm=27&gp=0.jpg',content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729643581,2045679483&fm=27&gp=0.jpg',content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},
        {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729643581,2045679483&fm=27&gp=0.jpg',content:'荞麦的功效',link:'https://baike.baidu.com/item/%E8%8D%9E%E9%BA%A6/889827?fr=aladdin'},                    
     ]
        
      return (
       <div className='imgSlid'>
           {this.genList(imgList)}
       </div>
      )
    }
  }