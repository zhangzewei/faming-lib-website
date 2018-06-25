import React, { Component } from 'react'
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAction from '../../actions';

import './style.css';

const mapStateToProps = ({Client}) => {
  return {
    state: Client
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clientAction, dispatch)
  }
}

class NewsPage extends Component {
  static propTypes = {
    match: PropTypes.object, // 这个是路由提供的参数，可以拿到路由带过来的参数
  }

  static contextTypes = {
    actions: PropTypes.object
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const currentId = id.split(':')[1];
    this.props.actions.getCurrentNews(currentId);
  }

  render (){
    const { currentNews } = this.props.state.toJS();
    return (
      <div className="news-article">
        <div className="news-article__header">
          <h2>{_get(currentNews, ['title'], '暂无')}</h2>
        </div>
        <div
          className="news-article__body"
          dangerouslySetInnerHTML={{__html: _get(currentNews, ['msg'], '暂无')}}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)