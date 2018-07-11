import React, { Component } from 'react';
import SlickCarousel from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css';

import Img1 from './img/kepu1.png'
import Img2 from './img/kepu2.png'
import Img3 from './img/kepu1.png'
import Img4 from './img/kepu1.png'

export default class ImgSlid extends Component {

  genList = ls => ls.map((l, i) => (
    <li className='ImgSlid-li' key={l.imgUrl}>
      <img src={l.imgUrl} />
    </li>
  ));

  render() {
    const imgList = [
      { imgUrl: Img1 },
      { imgUrl: Img2 },
      { imgUrl: Img3 },
      { imgUrl: Img4 },
      { imgUrl: Img3 },
      { imgUrl: Img4 },
      { imgUrl: Img3 },
      { imgUrl: Img4 },
    ];
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className='imgSlid'>
        <SlickCarousel {...settings}>
          {this.genList(imgList)}
        </SlickCarousel>
      </div>
    )
  }
}