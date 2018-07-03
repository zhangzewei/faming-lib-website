import React, { Component } from 'react';

import './style.css';

import linkImg1 from './img/linkImg (1).png'
import linkImg2 from './img/linkImg (2).png'
import linkImg3 from './img/linkImg (3).png'
import linkImg4 from './img/linkImg (4).png'
import linkImg5 from './img/linkImg (5).png'

export default class LinkList extends Component {


    render() {

        return (
            <div className='linkList'>
                <div className='linkList-header'>
                    <li className='linkButton'>友情链接</li>
                    <li className='linkButton'>相关链接</li>
                    <li className='linkLine'></li>
                </div>
                <ul className='linkList-ul'>
                    <li className='linkList-li'><a href=""><img className='' src={linkImg1} alt="" /></a></li>
                    <li className='linkList-li'><a href=""><img className='' src={linkImg2} alt="" /></a></li>
                    <li className='linkList-li'><a href=""><img className='' src={linkImg3} alt="" /></a></li>
                    <li className='linkList-li'><a href=""><img className='' src={linkImg4} alt="" /></a></li>
                    <li className='linkList-li'><a href=""><img className='' src={linkImg5} alt="" /></a></li>
                </ul>
            </div>
        )     
    }
}
