import React, { Component } from 'react'
import './style.css';
import { Input, Select } from 'antd';
import { Button } from 'antd/lib/radio';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import { Base64 } from 'js-base64';
import * as clientAction from '../actions';

const Option = Select.Option;

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
      authority: '',
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
        authority: currentUser.authority,
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

  selectAdmin = authority => {
    this.setState({ authority, changed: true });
  }

  updateUser = () => {
    const { name, password, authority } = this.state;
    const { match: { params: { id } }, actions } = this.props;
    if (name && password) {
      if (id && id !== 'createUser') {
        actions.updateUser(id, { name, password: Base64.encode(password), authority })
      } else {
        actions.addUser({ name, password: Base64.encode(password), authority });
      }
      this.setState({
        changed: false,
        name: '',
        password: '',
        authority: '',
      });
    } else {
      clientAction.openNotificationWithIcon('error', '用户管理', '用户名和密码不能有空值。')
    }
  }

  render() {
    const { name, password, changed, authority } = this.state;
    const { user } = this.props.state.toJS();
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
          <div className="user-details_item">
            <label>用户权限</label>
            <Select
              onSelect={this.selectAdmin}
              value={authority}
            >
              <Option
                key="superAdmin"
                disabled={user.authority !== 'superAdmin'}
              >超级管理员（不能被删除）</Option>
              <Option key="admin" >管理员（可以被删除）</Option>
            </Select>
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