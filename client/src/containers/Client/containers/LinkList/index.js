import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



import './style.css';

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
                <li className='linkList-li'><a href=""><img className='' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1431320882,4227826368&fm=27&gp=0.jpg" alt=""/></a></li>
                <li className='linkList-li'><a href=""><img className='' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1431320882,4227826368&fm=27&gp=0.jpg" alt=""/></a></li>
                <li className='linkList-li'><a href=""><img className='' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1431320882,4227826368&fm=27&gp=0.jpg" alt=""/></a></li>
                <li className='linkList-li'><a href=""><img className='' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1431320882,4227826368&fm=27&gp=0.jpg" alt=""/></a></li>
                <li className='linkList-li'><a href=""><img className='' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1431320882,4227826368&fm=27&gp=0.jpg" alt=""/></a></li>
                <li className='linkList-li'><a href=""><img className='' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1431320882,4227826368&fm=27&gp=0.jpg" alt=""/></a></li>
            </ul>
        </div>
      )
    }
  }