import React, { Component } from 'react';
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
          <Link to="/admin/users">
            <Card.Grid style={gridStyle}>
              用户管理
            </Card.Grid>
          </Link>
          <Link to="/admin/newsList">
            <Card.Grid style={gridStyle}>
              新闻管理
            </Card.Grid>
          </Link>
          <Link to="/admin/fileList">
            <Card.Grid style={gridStyle}>
              文件管理
            </Card.Grid>
          </Link>
        </Card>
      </div>
    );
  }
}

export default DashBoard;
