import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { Input, Button } from 'antd';
import './style.css'

export default class NewsEditer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      article: '',
    }
  }

  onModelChange = input => {
    console.log(input);
    this.setState({ article: input });
  }

  render() {
    return (
      <div className="news-editer__container">
        <div className="editer-item">
          <div className="editer-item_title">
            <span>新闻标题</span> 
            <Button onClick={() => console.log(111)}>发布新闻</Button>
          </div>
          <Input value={this.state.title} />  
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