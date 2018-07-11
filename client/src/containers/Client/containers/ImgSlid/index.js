import React, { Component } from 'react';
import SlickCarousel from 'react-slick';
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export default class ImgSlid extends Component {

  static propTypes = {
    imgList: PropTypes.array
  }

  static defaultProps = {
    imgList: []
  }

  genList = ls => ls.map(l => (
    <li className='ImgSlid-li' key={l.id}>
      <img src={l.img} />
    </li>
  ));

  render() {
    const { imgList }= this.props;
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