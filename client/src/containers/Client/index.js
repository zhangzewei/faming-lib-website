import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default class Client extends Component {
  render() {
    return (
      <div>
        <h2>前端展示页面</h2>
        <Link to="/admin/login">后端管理系统</Link>
      </div>
    )
  }
}