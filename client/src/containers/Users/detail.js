import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

// TODO: 接入数据的时候需要展示的数据用props的数据，初始的state的数据和
// props的一致，等到修改的时候再去变动，然后上穿
export default class UserDetails extends Component {
  static propTypes = {}
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="user-detail__container">
        <div className="user-detail__hearder">
          <img
            className="user-avatar"
            src="https://avatars.githubusercontent.com/u/12976145?v=3"
            alt="用户头像"
          />
          <div className="user-details">
            <div>用户名</div>
            <div>用户类型</div>
            <div>电话</div>
            <div>邮箱</div>
          </div>
        </div>
      </div>
    )
  }
}