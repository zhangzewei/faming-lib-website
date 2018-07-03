import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

import './style.css';

export default class ButtonList extends Component {
  static propTypes = {
    menus: PropTypes.object
  }
  static defaultProps = {
    menus: {
      LibMenu: [],
      PeopleMenu: [],
      ScientificMenu: [],
      CompareMenu: []
    }
  }
  render() {
    const { menus } = this.props;
    return (
      <div className='buttonList'>
          <ul className='buttonList-ul'>
          <Link to={_get(menus, ['LibMenu', '0', 'link'], '/')}>
            <li className='buttonList-item'>实验室概况</li>
          </Link>
          <Link to={_get(menus, ['ScientificMenu', '0', 'link'], '/')}>
            <li className='buttonList-item'>科研平台</li>
          </Link>
          <Link to={_get(menus, ['PeopleMenu', '0', 'link'], '/')}>
            <li className='buttonList-item'>人才培养</li>
          </Link>
          <Link to={_get(menus, ['CompareMenu', '0', 'link'], '/')}>
            <li className='buttonList-item'>合作交流</li>
          </Link>
          </ul>
      </div>
    )
  }
}