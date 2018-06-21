import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import * as clientAction from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Base64 } from 'js-base64';
import './style.css';

const FormItem = Form.Item;

const mapStateToProps = ({Admin}) => {
  return {
    state: Admin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clientAction, dispatch)
  }
}

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.actions.login({
          name: values.name,
          password: Base64.encode(values.password)
        });
      }
    });
  }
  render() {
    const { user } = this.props.state.toJS();
    if(user && user.logined) {
      clientAction.openNotificationWithIcon('success', '登录', `欢迎登录${user.name}`)
      return (<Redirect to="/admin"/>);
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem className="login-title">
            <h2>登录</h2>
          </FormItem>
          <FormItem>
            {getFieldDecorator('name', {
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
          <FormItem className="login-btns">
            <Button
              type="primary"
              className="login-form-button"
              htmlType="submit"
            >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)