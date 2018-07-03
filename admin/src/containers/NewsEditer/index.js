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
import { Input, Button, Select } from 'antd';
import { isEmpty, omit } from 'lodash';
import './style.css';
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

class NewsEditer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      article: '',
      changed: false,
      fileName: '',
      type: 'forMenu'
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
        type: editNews.type,
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
    const { user } = this.props.state.toJS();
    const { editNews, title, article, type } = this.state;
    
    if (title && article) {
      if (id === 'createNews') {
        const { title, article } = this.state;
        actions.addNews({
          creator: user.name,
          msg: article,
          title,
          type
        })
      } else {
        editNews.title = title;
        editNews.msg = article;
        actions.updateNews(omit(editNews, ['id', 'visitTimes', 'deleted', 'createTime']), id);
      }
    } else {
      clientAction.openNotificationWithIcon('error', '新闻编辑', '新闻标题或者内容不能为空。')
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
          <div className="editer-item_title">
            <span>新闻类型</span> 
          </div>
          <Select
            allowClear
            style={{ width: '100%' }}
            onSelect={key => this.setState({ type: key })}
            value={this.state.type}
          >
            <Option key="forMenu">菜单使用文章（主要使用在制作并且能够链接到对应文章的菜单）</Option>
            <Option key="gongzuo">工作动态（对应工作动态模块）</Option>
            <Option key="tonggao">通知公告（对应通知公告）</Option>
            <Option key="zhuanzai">转载文章（对应转载文章）</Option>
            <Option key="chengguo">科研成果</Option>
          </Select>
        </div>
        <div className="editer-item">
          <div className="editer-item_title">新闻内容</div>
          <FroalaEditor
            ref={n => this.editor = n}
            tag='textarea'
            model={this.state.article}
            onModelChange={this.onModelChange}
            config={{
              placeholderText: '编写新闻',
              editorClass: 'news-editer',
              imageUploadURL: '/news/image/upload',
              fileUploadURL: '/news/file/upload',
              fileUseSelectedText: true,
              events: {
                'froalaEditor.image.uploaded': (_e, _ed, resp) => {
                  return resp;
                },
                'froalaEditor.file.beforeUpload': (e, editor, files) =>{
                  console.log(files[0])
                  this.fileName = files[0].name;
                },
                'froalaEditor.file.uploaded': (e, editor, response) => {
                  console.log(response)
                  return `${response}`;
                }
              },
              imageInsertButtons: ['imageUpload', 'imageByURL'],
              videoInsertButtons: ['videoByURL']
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsEditer)