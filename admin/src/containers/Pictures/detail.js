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
        <h2>轮播图信息</h2>
        <div className="user-details">
          <div className="user-details_item">
            <label>图片对应新闻</label>
            <Input />
          </div>
          <div className="user-details_item">
            <label>图片</label>
            <img
              className="pic-detail_item"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528355327&di=61681caa7552f647b58a04d18d9cfe60&imgtype=jpg&er=1&src=http%3A%2F%2Fmvimg1.meitudata.com%2F5665a21fefb4b7202.jpg" alt="" />
          </div>
        </div>
        <Button
          style={{ marginTop: 20  }}
        >更换图片</Button>
      </div>
    )
  }
}