import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAction from '../actions';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { Input, Button } from 'antd';
import { isEmpty, omit } from 'lodash';
import './style.css'


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

class NewsEditer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      article: '',
      changed: false
    }
  }

  componentDidMount() {
    const { match: { params: { id } }, actions } = this.props;
    if (id && id !== 'createNews') {
      actions.getNewsById(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { editNews } = nextProps.state.toJS();
    if (!isEmpty(editNews)) {
      this.setState({
        title: editNews.title,
        article: editNews.msg,
        editNews
      })
    }
  }

  onModelChange = input => {
    this.setState({ article: input, changed: true });
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value, changed: true })
  }

  publishNews = () => {
    const { match: { params: { id } }, actions } = this.props;
    if (id === 'createNews') {
      const { title, article } = this.state;
      actions.addNews({
        creator: 'admin',
        msg: article,
        title,
        type: 'news'
      })
    } else {
      const { editNews, title, article } = this.state;
      editNews.title = title;
      editNews.msg = article;
      actions.updateNews(omit(editNews, ['id', 'visitTimes', 'deleted', 'createTime']), id);
    }
  }

  render() {
    return (
      <div className="news-editer__container">
        <div className="editer-item">
          <div className="editer-item_title">
            <span>新闻标题</span> 
            <Button
              onClick={this.publishNews}
              disabled={!this.state.changed}
            >发布新闻</Button>
          </div>
          <Input value={this.state.title} onChange={this.onTitleChange} />  
        </div>
        <div className="editer-item">
          <div className="editer-item_title">新闻内容</div>
          <FroalaEditor
            tag='textarea'
            model={this.state.article}
            onModelChange={this.onModelChange}
            config={{
              editorClass: 'news-editer'
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsEditer)