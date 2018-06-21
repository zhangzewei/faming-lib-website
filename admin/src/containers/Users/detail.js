import React, { Component } from 'react'
import './style.css';
import { Input } from 'antd';
import { Button } from 'antd/lib/radio';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty, omit } from 'lodash';
import { Base64 } from 'js-base64';
import * as clientAction from '../actions';

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

class UserDetails extends Component {
  static propTypes = {}
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      changed: false
    }
  }

  componentDidMount() {
    const { match: { params: { id } }, actions } = this.props;
    if (id && id !== 'createUser') {
      actions.getUserById(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser } = nextProps.state.toJS();
    if (!isEmpty(currentUser)) {
      this.setState({
        name: currentUser.name,
        password: Base64.decode(currentUser.password),
        currentUser
      })
    }
  }

  changeName = e => {
    const val = e.target.value;
    this.setState({ name: val, changed: true });
  }

  changePass = e => {
    const val = e.target.value;
    this.setState({ password: val, changed: true });
  }

  updateUser = () => {
    const { name, password } = this.state;
    const { match: { params: { id } }, actions } = this.props;
    if (name && password) {
      if (id && id !== 'createUser') {
        actions.updateUser(id, { name, password: Base64.encode(password) })
      } else {
        actions.addUser({ name, password: Base64.encode(password) });
      }
      this.setState({ changed: false });
    } else {
      clientAction.openNotificationWithIcon('error', '用户管理', '用户名和密码不能有空值。')
    }
  }

  render() {
    const { name, password, changed } = this.state;
    return (
      <div className="user-detail__container">
        <h2>用户信息</h2>
        <div className="user-details">
          <div className="user-details_item">
            <label>用户名</label>
            <Input
              value={name}
              onChange={this.changeName}
            />
          </div>
          {/* <div className="user-details_item">
            <label>电话</label>
            <Input />
          </div> */}
          <div className="user-details_item">
            <label>密码</label>
            <Input
              value={password}
              onChange={this.changePass}
            />
          </div>
        </div>
        <Button
          style={{ float: 'right' }}
          disabled={!changed}
          onClick={this.updateUser}
        >确认</Button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)