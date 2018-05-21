import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsPage extends Component {
  static propTypes = {
    match: PropTypes.object, // 这个是路由提供的参数，可以拿到路由带过来的参数
  }
  static contextTypes = {
    state: PropTypes.object
  }

  componentDidUpdate() {
    const { match: { params: { id } } } = this.props;
    this.articleBody.innerHTML = this.context.state.Client.article[id]
  }

  render (){
    return (
      <div className="news-article" ref={n => this.articleBody = n} />
    );
  }
}