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

export default class NewsEditer extends Component {
  render() {
    return (
      <FroalaEditor
        tag='textarea'
        config={{
          placeholderText: 'Edit Your Content Here!',
          charCounterCount: false
        }}
      />
    );
  }
}