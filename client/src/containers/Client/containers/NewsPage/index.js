import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css';

export default class NewsPage extends Component {
  static propTypes = {
    match: PropTypes.object, // 这个是路由提供的参数，可以拿到路由带过来的参数
    currentNews: PropTypes.object.isRequired,
  }

  static contextTypes = {
    actions: PropTypes.object
  }

  componentDidMount() {
    const { currentNews, match: { params: { id } } } = this.props;
    this.context.actions.getCurrentNews(id);
  }

  componentDidUpdate() {
    const { currentNews, match: { params: { id } } } = this.props;
    this.context.actions.getCurrentNews(id);
    this.articleBody.innerHTML = currentNews.msg;
  }

  render (){
    const { currentNews } = this.props;
    return (
      <div className="news-article">
        <div className="news-article__header">
          <h2>{currentNews.title}</h2>
        </div>
        <div
          className="news-article__body"
          id="news-article__body"
          ref={n => this.articleBody = n}
        />
      </div>
    );
  }
}