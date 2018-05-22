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

  constructor() {
    super();
    this.state = {
      oldId: ''
    }
  }

  componentWillReceiveProps() {
    const { currentNews, match: { params: { id } } } = this.props;
    this.setState({ oldId: id });
    this.articleBody.innerHTML = currentNews.msg || '暂无';
  }

  componentDidMount() {
    const { currentNews, match: { params: { id } } } = this.props;
    this.context.actions.getCurrentNews(id);
  }

  shouldComponentUpdate(nextProps) {
    const { match: { params: { id } } } = nextProps;
    return id !== this.state.oldId;
  }

  componentDidUpdate() {
    const { match: { params: { id } } } = this.props;
    this.context.actions.getCurrentNews(id);
  }

  render (){
    const { currentNews } = this.props;
    return (
      <div className="news-article">
        <div className="news-article__header">
          <h2>{currentNews.title || '暂无'}</h2>
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