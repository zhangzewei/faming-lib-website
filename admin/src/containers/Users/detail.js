import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';
import { Input } from 'antd';
import { Button } from 'antd/lib/radio';

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
        <h2>用户信息</h2>
        <div className="user-details">
          <div className="user-details_item">
            <label>用户名</label>
            <Input />
          </div>
          <div className="user-details_item">
            <label>用户权限</label>
            <Input />
          </div>
          <div className="user-details_item">
            <label>电话</label>
            <Input />
          </div>
          <div className="user-details_item">
            <label>密码</label>
            <Input type="password" />
          </div>
        </div>
        <Button
          style={{ float: 'right' }}
        >确认</Button>
      </div>
    )
  }
}