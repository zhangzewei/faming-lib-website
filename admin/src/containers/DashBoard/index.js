import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const gridStyle = {
  width: '33.3%',
  textAlign: 'center',
};


class DashBoard extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <Card title="仪表盘">
          <Link to="/admin/goods">
            <Card.Grid style={gridStyle}>
              货物列表
            </Card.Grid>
          </Link>
          <Link to="/admin/users">
            <Card.Grid style={gridStyle}>
              用户类表
            </Card.Grid>
          </Link>
          <Link to="/admin/orders">
            <Card.Grid style={gridStyle}>
              订单列表
            </Card.Grid>
          </Link>
        </Card>
      </div>
    );
  }
}

export default DashBoard;
