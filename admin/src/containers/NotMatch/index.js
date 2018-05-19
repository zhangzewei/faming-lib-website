import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page404 from './images/404.png';
import './style.css';

export default class NotMatch extends Component {
  render() {
    return (
      <div className="page-404">
        <img alt="页面找不到了" src={Page404} />
      </div>
    );
  }
}
