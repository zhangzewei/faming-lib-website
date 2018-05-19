import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HomePage extends Component {
  render (){
    return [
      <section key="section1" >
        section1
      </section>,
      <section key="section2" >
        section2
      </section>
    ];
  }
} 