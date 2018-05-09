import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

class Register extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem className="login-title">
            <h2>注册</h2>
          </FormItem>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请填写用户名！' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请填写密码！' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('comfirmPassword', {
              rules: [{ required: true, message: '请确认密码！' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
            )}
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="填写电话" />
          </FormItem>
          <FormItem className="login-btns">
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
              <Button className="login-form-button">
                注册
              </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Register);

export default WrappedNormalLoginForm;