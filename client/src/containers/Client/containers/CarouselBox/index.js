import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

import './style.css';

import Img1 from './img/carouse (1).jpg'
import Img2 from './img/carouse (2).jpg'
import Img3 from './img/carouse (3).jpg'
import Img4 from './img/carouse (4).jpg'

export default class CarouselBox extends Component {

    genCarouseList=cList=>cList.map((l,i)=>{
        return(
            <div className='autoplay' key={i}><img src={l.img} alt=""/><div className='autoplayContent'>{l.autoplayContent}</div></div>
        )
    })

        render(){

            const CarouseList=[
                {img:Img1,autoplayContent:'农业部杂粮加工实验室'},
                {img:Img2,autoplayContent:'农业部杂粮加工实验室'},
                {img:Img3,autoplayContent:'农业部杂粮加工实验室'},
                {img:Img4,autoplayContent:'农业部杂粮加工实验室'}
                ]

            return(
                <div className='Carousel'>
                <Carousel autoplay>
                    {/* <div className='autoplay'><img src={Img1} alt=""/><div className='autoplayContent'>{}</div></div>
                    <div className='autoplay'><img src={Img2} alt=""/><div className='autoplayContent'></div></div>
                    <div className='autoplay'><img src={Img3} alt=""/><div className='autoplayContent'></div></div>
                    <div className='autoplay'><img src={Img4} alt=""/><div className='autoplayContent'></div></div> */}
                    {this.genCarouseList(CarouseList)}
                </Carousel>
            </div>
         )
        }
            
}