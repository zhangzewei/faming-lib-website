import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

import './style.css';

export default class CarouselBox extends Component {
        render(){
            return(
                <div className='Carousel'>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
         )
        }
            
}